const DB = require('./dataBaseConnection');
//UPDATE Data IN person Table
const update = () =>{
    DB.query(`UPDATE persons SET phonenumber=092012000 WHERE ID = 1`,(error,result,fields)=>{
        if (error) throw error;
        console.log("update was susessful");
    });

}
update();