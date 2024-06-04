const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '20032001jf',
    database: 'bank',
    port: 3306
});


module.exports = connection;