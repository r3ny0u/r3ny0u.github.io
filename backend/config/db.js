const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost:27017",
user: "root",
password: "",
database:"myWebsite" 
})

module.exports = db;