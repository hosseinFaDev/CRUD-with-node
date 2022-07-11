const DB = require('./dataBaseConnection');
//delete Data From person Table
const deleteInfo = () => {
    DB.query(`DELETE FROM persons WHERE ID=2`, (error, result, fields) => {
        if (error) throw error;
        console.log("delete was susessful");
    })
}
deleteInfo();

