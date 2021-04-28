const pool = require('./db');

pool.query(`SELECT job_id,min(salary),max(salary) FROM public.employees GROUP BY job_id ORDER BY job_id asc`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();