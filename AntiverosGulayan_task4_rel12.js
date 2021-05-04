const pool = require('./db');

pool.query(`SELECT d.department_name,
            AVG(e.salary),
            COUNT(commission_pct)
            FROM employees e
            JOIN departments d
            ON e.department_id = d.department_id
            GROUP BY d.department_name;`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();