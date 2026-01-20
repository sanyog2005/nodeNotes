import express from "express";
const app = express();
mongoose.connect('mongodb+srv://sanyogsharma073_db_user:94pJPDTXgN7iUSy9@cluster0.qzhplzb.mongodb.net/',{
    dbName:"nodepract"
}).then(()=>console.log("mongo connected")).
catch((e)=>console.log(e));

//render file
app.get('/',(req,res)=>{
    res.render('index.ejs',{url:null})
})

const port = 3000;
app.listen(port,()=>{  `Server is running on port ${port}`});