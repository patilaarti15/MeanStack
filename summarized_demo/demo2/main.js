const http=require("http");
const mymod=require("./mymod");
http.
createServer((req,res)=>{ 
    let str=console.log("hello CDAC") ;
    /*const output=mymod.data;
    let str=JSON.stringify(output); */
    res.end(str); 
   
}).listen(3000);