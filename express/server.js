import express from 'express';
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello from Express server");
})
app.get('/about',(req,res)=>{
    res.send("This is the about page");
})
const port = 2000;
app.listen(port,()=>console.log(`server is running on port ${port}`));
