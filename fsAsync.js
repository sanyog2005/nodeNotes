
const fs = require("fs");
const filee = __dirname;
fs.promises.readdir(filee).then((data)=>{console.log(data)}).catch((err)=>console.error(err));
const path = require("path");
const a = path.join(__dirname,"ab.txt");
console.log(a);

const readf= async()=>{
    try{
        const res = fs.promises.readdir("fsPromise.txt","utf-8");
        
        console.log(res);
        
    }catch(err){
        console.error(err);
        
    }
}