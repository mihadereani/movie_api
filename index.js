const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  uuid = require('uuid'),
  mongoose = require('mongoose'),
  Models = require('./models.js');

const app = express();
const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/myFlixDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('combined'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* let users = [
  {
    id: 1,
    name: 'Kim',
    favoriteMovies: [],
  },
  {
    id: 2,
    name: 'Joe',
    favoriteMovies: ['The Fountain'],
  },
];

let movies = [
  {
    Title: 'Iron Man',
    Year: '2008',
    Released: '02 May 2008',
    Runtime: '126 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Genre: {
      Name: 'Action',
      Description: 'Action is where everybody dies',
    },
    Director: {
      Name: 'Jon Favreau',
      Bio: 'Unknown',
      Birth: 'Arround 2000',
    },
    Actors: 'Robert Downey Jr., Gwyneth Paltrow, Terrence Howard',
    Plot: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
  },
  {
    Title: 'Harry Potter and the Prisoner of Azkaban',
    Year: '2004',
    Released: '04 Jun 2004',
    Runtime: '142 min',
    Genre: {
      Name: 'Adventure',
      Description: 'Adveture takes you to another worlds',
    },
    Director: {
      Name: 'Alfonso Cuarón',
      Bio: 'Adventorus',
      Birth: '1984',
    },
    Writer: 'J.K. Rowling, Steve Kloves',
    Actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint',
    Plot: 'Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg',
  },
  {
    Title: 'The Devil Wears Prada',
    Year: '2006',
    Released: '30 Jun 2006',
    Runtime: '109 min',
    Genre: {
      Name: 'Drama',
      Description: 'Drama comes with a high in the middle.',
    },
    Director: {
      Name: 'David Frankel',
      Bio: 'Scary',
      Birth: '1700',
    },
    Writer: 'Aline Brosh McKenna, Lauren Weisberger',
    Actors: 'Anne Hathaway, Meryl Streep, Adrian Grenier',
    Plot: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg',
  },
]; */

app.post('/users', (req, res) => {
  Users.findOne({ Username: req.body.Username })
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + 'already exists');
      } else {
        Users.create({
          Username: req.body.Username,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
        })
          .then((user) => {
            res.status(201).json(user);
          })
          .catch((error) => {
            console.error(error);
            req.status(500).send('Error: ' + error);
          });
      }
    })
    .catch((error) => {
      console.error(error);
      req.status(500).send('Error: ' + error);
    });
});

app.get('/users', (req, res) => {
  Users.find()
    .then((users) => {
      res.status(201).json.users;
    })
    .catch((error) => {
      console.error(error);
      req.status(500).send('Error: ' + error);
    });
});

app.get('/users/:Username', (req, res) => {
  Users.findOne({ Username: req.params.Username })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      req.status(500).send('Error: ' + err);
    });
});

app.put('/users/:Username', (req, res) => {
  Users.findOneAndUpdate(
    { Username: req.params.Username },
    {
      $set: {
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday,
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    }
  );
});

app.post('/users/:id/movies/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find((user) => user.id == id);

  if (user) {
    user.favoriteMovies.push(movieTitle);
    res.status(200).send(`${movieTitle} has been added to user ${id}'s array`);
  } else {
    res.status(400).send('no such user');
  }
});

app.delete('/users/:id/movies/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find((user) => user.id == id);

  if (user) {
    user.favoriteMovies = user.favoriteMovies.filter(
      (title) => title !== movieTitle
    );
    res
      .status(200)
      .send(`${movieTitle} has been removed from user ${id}'s array`);
  } else {
    res.status(400).send('no such user');
  }
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  let user = users.find((user) => user.id == id);

  if (user) {
    users = users.filter((user) => user.id != id);
    res.status(200).send(`user ${id} has been deleted`);
  } else {
    res.status(400).send('no such user');
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

app.get('/movies/:title', (req, res) => {
  const { title } = req.params;
  const movie = movies.find((movie) => movie.Title === title);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400).send('no such movie');
  }
});

app.get('/genre/:genreName', (req, res) => {
  const { genreName } = req.params;
  const genre = movies.find((movie) => movie.Genre.Name === genreName).Genre;
  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(400).send('no such movie');
  }
});

app.get('/directors/:directorName', (req, res) => {
  const { directorName } = req.params;
  const director = movies.find(
    (movie) => movie.Director.Name === directorName
  ).Director;
  if (director) {
    res.status(200).json(director);
  } else {
    res.status(400).send('no such director');
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
