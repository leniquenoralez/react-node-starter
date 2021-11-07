import express from 'express';
import connect from './db';
import config from './config';
const app = express();

app.get('/api', (req, res) => {
  res.json('Response From Server!!');
});

const start = async () => {
  try {
    const client = await connect();

    if (client) {
      console.log('DB CONNECTED');
    }
    app.listen(3000, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (error) {
    console.error(error);
  }
};
start();
