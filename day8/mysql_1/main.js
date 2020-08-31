const mysql = require("mysql");
const Promise = require("bluebird");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


let checkdbconnection=async()=>{
    console.log("check db connection here");
   const connection= mysql.createConnection(
        {
        host:"localhost",
        user:"root",
        password:"",
        database:"students"});
     //connection.connect
        await connection.connectAsync();
        
        let sql="select * from students";
        let result=await connection.queryAsync(sql);
        

        //logic here
        console.log("connection Successful")
        
        //connection.end()
        await connection.endAsync();
        console.log(result);
        return result;
        
};
checkdbconnection();




