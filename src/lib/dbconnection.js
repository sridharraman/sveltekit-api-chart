import pgPromise from 'pg-promise';
import { dbConnectionString } from './settings.js';

const pgp = pgPromise({
  query(event) {
    event.client.on('notice', function (notice) { 
      console.log(notice.message);
    });
  }
});
const db = pgp(dbConnectionString);

export default db;
