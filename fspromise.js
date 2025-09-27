const fs = require("fs");
const path = require('path');
const fileName = 'fsPromise.txt';
const filePath = path.join(__dirname,fileName);
const filee= __dirname;
fs.promises.readdir(filee).then((data)=>{console.log(data)}).catch((err)=>console.error(err));

fs.promises.writeFile("fsPromise.txt","hello am fs promise","utf-8").then((data)=>{console.log(data)
}).catch((err)=>console.error(err));
fs.promises.readFile("fsPromise.txt","utf-8").then((data)=>{console.log(data)}).catch((err)=>{console.error(err)});
fs.promises.appendFile("fsPromise.txt","hello moto","utf-8").then((data)=>{console.log(data)}).catch((err)=>{console.error(err)});