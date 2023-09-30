const fs = require('fs');
const pool = require('../config/config.js');

const query = fs.readFileSync ('./db/seed.sql', 'utf-8');
console.log(query);

pool.query(query, (err, result)=>{
    if (err){
        console.log (err);
    } else {
        console.log("seeding Successfully");
        pool.end();
    }
})