import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";

const app = express();

import { v2 as cloudinary } from 'cloudinary';
 cloudinary.config({ 
        cloud_name: 'dze4nfw1n', 
        api_key: '759621976263445', 
        api_secret: '9Ik55rrbzcxxqfy7VNAAYfSr3Pw' // Click 'View API Keys' above to copy your API secret
    });

mongoose.connect('mongodb+srv://sanyogsharma073_db_user:94pJPDTXgN7iUSy9@cluster0.qzhplzb.mongodb.net/',{
    dbName:"nodepract"
}).then(()=>console.log("mongo connected")).
catch((e)=>console.log(e));

app.get('/',(req,res)=>{
    res.render('index.ejs',{url:null});
})
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const imageSchema = new mongoose.Schema({
    filename:String,
    public_id:String,
    imgUrl: String,
});
const File = mongoose.model('cloudinary',imageSchema)
app.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file.path;
    const cloudinaryRes = await cloudinary.uploader.upload(file, {
        folder:'nodeUploads'})
    const db = await File.create({
        filename: file.originalname,
        public_id: cloudinaryRes.public_id,
        imgUrl: cloudinaryRes.secure_url
    });
    res.render('index.ejs',{url:cloudinaryRes.secure_url});    
    // res.json({message:'file uploaded successfully',cloudinaryRes});

  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});


const port =2000;
 app.listen(port,()=>{console.log(`port is running on ${port}`);
 });