const pool = require('./db');

pool.query(`SELECT hire_date,sum(salary) FROM public.employees GROUP BY hire_date`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();