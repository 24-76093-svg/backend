import mysql from 'mysql2/promise.js'

const pool = mysqlcreatePool({
host: '127.0.01',
user: 'root',
password: "",
database: 'librarydb'

})

export default pool; 