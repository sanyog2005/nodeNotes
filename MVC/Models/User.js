import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    age:{type:Number},
    createdAt:{type:Date,default:Date.now()}
});
export const User = mongoose.model("user",userSchema);