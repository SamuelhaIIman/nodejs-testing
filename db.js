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

      connection.query("SELECT * FROM users", function (err, result, fields) {
            if (err) {
                  console.error('Error connecting to the database:', err);
                  return;
            }
            console.log(result);
      })
});

function addTwo(num) {
      return num + 2;
}

export { addTwo }; 