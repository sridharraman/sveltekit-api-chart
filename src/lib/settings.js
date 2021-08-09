import dotenv from 'dotenv';
dotenv.config();

const dbConnectionString = process.env['DB_CONNECTION_STRING'];

export {
  dbConnectionString
}
