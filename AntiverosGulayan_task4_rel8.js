const pool = require('./db');

pool.query(`SELECT e.first_name AS "Employee Name",m.first_name AS "Manager" 
            FROM employees e
            JOIN employees m
            ON e.manager_id = m.employee_id;`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();
