import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gym_system'
})

export default pool.promise()