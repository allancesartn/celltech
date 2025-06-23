
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'celltech'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL');
});

module.exports = db;
