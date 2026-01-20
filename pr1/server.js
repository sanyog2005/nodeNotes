import express from "express";
import mongoose from "mongoose";
import { shortUrl,getOriginalUrl } from "./Controllers/url.js";



const app = express();
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://sanyogsharma073_db_user:94pJPDTXgN7iUSy9@cluster0.qzhplzb.mongodb.net/',{
    dbName:"nodepract"
}).then(()=>console.log("mongo connected")).
catch((e)=>console.log(e));

app.get('/',(req,res)=>{

    res.render('index.ejs',{shortUrl:null});
})
app.post('/short',shortUrl)
app.get("/:shortCode",getOriginalUrl);
 
const port = 1000;
app.listen(port,()=>console.log(`port is on ${port}`));