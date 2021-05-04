const pool = require('./db');

pool.query(`SELECT e.first_name, e.last_name, e.salary 
            FROM employees e
            JOIN employees s
            ON e.salary < s.salary 
            AND s.employee_id = 182;`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();