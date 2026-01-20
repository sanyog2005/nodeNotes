import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 3000;
mongoose.connect("mongodb+srv://sanyogsharma073_db_user:94pJPDTXgN7iUSy9@cluster0.qzhplzb.mongodb.net/",{dbName:"NodePract"}

).then(()=>console.log("MongoDB connected")).catch((err)=>console.log(err));
app.listen(port,()=>console.log(`port is on ${port}`));