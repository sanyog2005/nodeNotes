import express from "express";

const app = express();
import mysql from 'mysql2'
import cors from "cors";
app.use(cors());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password123",
    database:"loginRegisterDB"
});
app.get("/",(req,res)=>{
    res.json("hello this is backend");
});
app.post("/register",(req,res)=>{
    const q = "INSERT INTO users(`name`,`email`,`password`) VALUES (?)";
app.use(express.json());
app.listen(8000,()=>{
    console.log("server is running on port 8000")
});
