import config from './config';
import express from 'express';
import connect from './db';
import cors from 'cors';
import mongoose from 'mongoose';

const { PORT } = process.env;

const app = express();
app.use(cors());
app.get('/api', (req, res) => {
  res.json('Response From Server!!');
});

const start = async () => {
  try {
    await connect();

    app.listen(PORT, () => {
      console.log(`REST API on http://localhost:${PORT}/api 🚀`);
    });
  } catch (error) {
    console.error(error);
  }
};
start();
