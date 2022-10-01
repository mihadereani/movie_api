const express = require('express'),
  morgan = require('morgan');
bodyParser = require('body-parser');
uuid = require('uuid');
const app = express();

app.use(morgan('combined'));
app.use(express.static('public'));
app.use(bodyParser.json());

let users = [
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
];

app.post('/users', (req, res) => {
  const newUser = req.body;

  if (newUser.name) {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(400).send('users need names');
  }
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  let user = users.find((user) => user.id == id);

  if (user) {
    user.name = updatedUser.name;
    res.status(200).json(user);
  } else {
    res.status(400).send('no such user');
  }
});

app.post('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find((user) => user.id == id);

  if (user) {
    user.favoriteMovies.push(movieTitle);
    res.status(200).send(`${movieTitle} has been added to user ${id}'s array`);
  } else {
    res.status(400).send('no such user');
  }
});

app.delete('/users/:id/:movieTitle', (req, res) => {
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

app.get('/movies/genre/:genreName', (req, res) => {
  const { genreName } = req.params;
  const genre = movies.find((movie) => movie.Genre.Name === genreName).Genre;
  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(400).send('no such movie');
  }
});

app.get('/movies/directors/:directorName', (req, res) => {
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
