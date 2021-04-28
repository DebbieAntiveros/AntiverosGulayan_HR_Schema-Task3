const pool = require('./db');

pool.query(`SELECT ROUND(AVG(salary),0) AS "Average" FROM public.employees`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();