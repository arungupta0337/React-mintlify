const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let savedToken = '';

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.post('/saveToken', (req, res) => {
  const { token } = req.body;
  if (token) {
    savedToken = token;
    res.status(200).json({ data: "Saved the token" });
  } else {
    res.status(400).json({ error: 'Token not provided' });
  }
});

app.get('/getToken', (req, res) => {
  if (savedToken) {
    res.send(savedToken);
  } else {
    res.send('');
  }
});

app.listen(5000, () => console.log('Example app is listening on port 5000.'));
