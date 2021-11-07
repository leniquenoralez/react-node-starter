import mongoose from 'mongoose';
import config from '../config';

const connect = () => {
  console.log(`CONNECTING TO DB: ${config.DB_URI}`);
  return mongoose.connect(config.DB_URI, { useNewUrlParser: true });
};

export default connect;
