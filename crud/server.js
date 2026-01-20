import express from 'express';
const app = express();
const products = [
    {title:'Product 1',price:100},
    {title:'Product 2',price:200},
    {title:'Product 3',price:300},
];
app.get('/',(req,res)=>{
    res.json({message: "Welcome to the Express server",
        products: products,
        success: true
    });

})
const port = 2000;
app.listen(port,()=>console.log(`Express server running on port ${port}`)); 