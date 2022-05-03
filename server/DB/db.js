const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:"postgres",
    database:"todo",
    port:5432,
    host:"localhost"
})



module.exports = pool;