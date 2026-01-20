import express from 'express';
import path from 'path';
const app = express();
const products = [
    {title:'Product 1',price:100},
    {title:'Product 2',price:200},
    {title:'Product 3',price:300},
];
const dir = path.resolve();
const url = path.join(dir,'./ab.html');
console.log(url);

app.get('/',(req,res)=>{
    // res.json({message: "Welcome to the Express server",
    //     products: products,
    //     success: true
    // });
    res.sendFile(url);

})
const port = 2000;
app.listen(port,()=>console.log(`Express server running on port ${port}`)); 