const DB = require('./dataBaseConnection');

//Query for Read all Information From person Table
DB.query(`SELECT * FROM persons`,(error,result,fields)=>{
    if(error)throw error;
    console.log(result,fields);
});


//Query for Spical Data with Escape Character
const userID = 1
DB.query(`SELECT * FROM persons where ID=? `,[userID],(error,result,fields)=>{
    if(error)throw error;
    console.log(result,fields);
});

