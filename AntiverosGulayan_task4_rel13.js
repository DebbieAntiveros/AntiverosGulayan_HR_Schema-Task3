const pool = require('./db');

pool.query(`SELECT
            department_name,
            CONCAT  (first_name, ' ', last_name) AS "Full name"

            FROM
            employees,departments;`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();