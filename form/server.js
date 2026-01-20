import { log } from 'console';
import express from 'express';
import path from 'path';


const app = express();
const port = 2000;
app.use(express.urlencoded({extended:true})); 
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.post('/form-submit',(req,res)=>{
    console.log(req.body)
    
    res.json({
        message: "Form data received successfully",
        success: true,
    })
})
app.listen(port,()=>console.log(`server is running on ${port}`));
