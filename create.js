const DB = require('./dataBaseConnection');
//Insert Data Into person Table
const insert = () => {

    const studentsData = {
        ID: 1,
        name: "hossein",
        phonenumber: 0917000000
    }


    DB.query(`INSERT INTO persons SET ?`, studentsData, (error, result, fields) => {
        if (error) throw error;
        console.log('add susessful')
    })
}

insert();
