import mongoose from 'mongoose';
const { MONGODB_URI, DB_NAME } = process.env;

const DB_URL = `${MONGODB_URI}/${DB_NAME}`;
const connect = async () => {
  console.log(`CONNECTING TO DB: ${DB_URL}`);

  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
    });

    console.log('SUCCESSFULLY CONNECTED TO DATABASE! ✅');
  } catch (error) {
    console.log('FAILED TO CONNECT TO DATABASE! ❌');
  }
  return;
};

export default connect;
