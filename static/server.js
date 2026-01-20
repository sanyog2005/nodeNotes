import express from 'express';
import path from 'path';
const app = express ();
app.use(express.static(path.join(path.resolve(),'public')));
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
const port = 2000;
app.listen(port ,()=>console.log(`server is running on ${port}`));
