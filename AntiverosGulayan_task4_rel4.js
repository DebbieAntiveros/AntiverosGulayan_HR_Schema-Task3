const pool = require('./db');

pool.query(`SELECT e.first_name,e.last_name,e.department_id,d.department_name
            FROM employees e
            INNER JOIN departments d 
            ON e.department_id = d.department_id
            WHERE e.department_id = 40 OR e.department_id = 80
            ORDER BY department_id;`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();