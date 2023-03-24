const mysql = require('mysql2');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
}
const pool = mysql.createPool(config)

module.exports = pool;