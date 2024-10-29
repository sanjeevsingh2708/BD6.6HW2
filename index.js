const cors = require('cors');
const express = require('express');
const { getAllGames, getGamesById } = require('./controllers');

const app = express();

app.use(cors());
app.use(express.json());

// Endpoint to get all games

app.get('/games', async (req, res) => {
  const games = getAllGames();
  res.json({ games });
});

//Endpoint to get game details by id

app.get('/games/details/:id', async (req, res) => {
  let game = getGamesById(parseInt(req.params.id));

  res.json({ game });
});

module.exports = { app };

// app.listen(3000, () => {
//   console.log(`Server running on port 3000`);
// });

// Run the index.js file using command bcz this exercise is for test cases(In test file we are running server):-  node server.js
