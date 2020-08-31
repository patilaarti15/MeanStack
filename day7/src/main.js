let fs=require("fs");

let readfiledemo=()=>{
    console.log("lets read file system");
const path="/Users/Aarti/Desktop/New folder/main/hello_fs/package.json"
 const output=fs.readFileSync(path,{encoding:"utf-8"});
 console.log(output);

};
readfiledemo();


let readFileAsync1=()=>{
const path="/Users/Aarti/Desktop/New folder/main/hello_fs/package.json";
fs.readFile(path,{encoding:"utf-8"},(err,data)=>{console.log(data);
});

const path1="/Users/Aarti/Desktop/New folder/main/hello_fs/src/test.txt";
fs.readFile(path1,{encoding:"utf-8"},(err,data)=>{console.log(data);
});
};
readFileAsync1();