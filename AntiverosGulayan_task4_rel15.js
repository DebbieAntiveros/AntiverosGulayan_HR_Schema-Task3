const pool = require('./db');

pool.query(`SELECT c.country_name,
            l.city,
            COUNT(d.department_id)
            FROM countries c
            INNER JOIN locations l
            ON c.country_id = l.country_id
            INNER JOIN departments d
            ON l.location_id = d.location_id
            WHERE d.department_id IN (SELECT e.department_id
                                FROM employees e
                                GROUP BY e.department_id 
                                HAVING COUNT(e.department_id) >= 2)
            GROUP BY c.country_name, l.city;`,(err,res)=> {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();

