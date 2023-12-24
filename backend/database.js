const pg = require('pg');

const db = new pg.Client({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'postgres', 
    port: process.env.DB_PORT || 5432, 
    password: process.env.DB_PASSWORD || 'default_password' // Use environment variable or default password
});

db.connect()
    .then(() => {
        console.log('Connected to the database'); // Log when the database connection is established
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
    });

module.exports = { db };
