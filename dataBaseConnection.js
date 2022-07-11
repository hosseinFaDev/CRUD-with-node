const mysql = require('mysql');
const dotenv = require('dotenv').config();

//Create a connection To MySQL
const connection = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
});


//Check connection
connection.connect(err=>{
    if(err){
        console.log("some errors",err.message);
        return;
    }
    console.log("connection secsess")
});

module.exports=connection;


