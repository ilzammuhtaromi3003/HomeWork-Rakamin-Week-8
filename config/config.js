const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'HW_8',
    password: 'ilzam3003',
    port: 5432,
})

module.exports = pool;