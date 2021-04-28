const pool = require('./db');

pool.query(`SELECT city, count(state_province) FROM public.locations GROUP BY city ORDER by city asc`,(err,res)=> 
{
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();