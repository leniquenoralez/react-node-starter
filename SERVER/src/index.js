import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.json('Response From Server!!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});
