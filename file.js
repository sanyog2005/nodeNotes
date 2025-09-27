const { log } = require('console');
const fs = require('fs');
fs.writeFileSync("abc.txt","hello am ","utf-8");
const b = fs.readFileSync("abc.txt","utf-8");
console.log(b);
  
fs.readFile("abc.txt","utf-8",(err,data)=>{
    if(err) console.error(err);
    else console.log(data);
});
fs.writeFile("abc.txt","hello moto","utf-8",(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("hello galat");
        
    }
})