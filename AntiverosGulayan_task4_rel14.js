const pool = require('./db');

pool.query(`SELECT j.job_title ,ROUND(AVG(e.salary),0) AS "Average"
            FROM employees e 
            JOIN jobs j
            ON e.job_id = j.job_id
            GROUP BY job_title;`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();

