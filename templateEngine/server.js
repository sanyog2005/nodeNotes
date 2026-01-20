import express from 'express';
const app = express();
app.get('/',(req,res)=>{
    const name = "John Doe";
    res.render('index.ejs',{name});
})
const port = 3000;
app.listen(port,()=>console.log(`port is on ${port}`));
