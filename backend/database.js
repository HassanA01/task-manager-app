const pg = require('pg');

const db = new pg.Client({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'your_default_db_name', 
    port: process.env.DB_PORT || 5432, 
    password: process.env.DB_PASSWORD
});

db.connect();

module.exports = db;
