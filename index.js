const express = require('express'),
  morgan = require('morgan');
const app = express();

app.use(morgan('combined'));
app.use(express.static('public'));

const topTenMovies = [
  {
    title: 'The Shawshank Redemption',
  },
  {
    title: 'The Godfather',
  },
  {
    title: 'The Dark Knight',
  },
  {
    title: 'The Godfather Part II',
  },
  {
    title: '12 Angry Men',
  },
  {
    title: "Schindler's List",
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
  },
  {
    title: 'Pulp Fiction',
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
  },
  {
    title: 'Il buono, il brutto, il cattivo',
  },
];

app.get('/movies', (req, res) => {
  res.json(topTenMovies);
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
