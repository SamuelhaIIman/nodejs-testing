const mysql = require('mysql2');

const db = mysql.createConnection({
      host: 'localhost',
      user: 'MySQL80', // Replace with your MySQL username
      password: 'MimiasKolmas.824kp', // Replace with your MySQL password
      database: 'my_cart_db'
});

db.connect((err) => {
      if (err) {
            console.error('Error connecting to MySQL:', err);
      } else {
            console.log('Connected to MySQL');
      }
});

module.exports = db;
