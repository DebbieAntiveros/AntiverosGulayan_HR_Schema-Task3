const pool = require('./db');

pool.query(`SELECT d.department_name , l.city , l.state_province
            FROM  departments d
            JOIN locations l
            ON  d.location_id = l.location_id;`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();



