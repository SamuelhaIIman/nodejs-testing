import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
});

connection.connect((err) => {
      if (err) {
            console.error('Error connecting to the database:', err);
            return;
      }
      console.log('Connected to the MySQL database.');
});

// Export a query function
export const queryDatabase = (query, params = []) => {
      return new Promise((resolve, reject) => {
      connection.query(query, params, (err, results) => {
      if (err) {
            return reject(err);
      }
      resolve(results);
      });
      });
};

// Export the connection if needed for other purposes
export default connection;