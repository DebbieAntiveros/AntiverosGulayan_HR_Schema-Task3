const pool = require('./db');

pool.query(`SELECT first_name,last_name,department_name,city,state_province
            FROM locations,departments
            CROSS JOIN employees;`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();