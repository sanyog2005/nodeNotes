import mongoose from "mongoose";
import ejs from "ejs";
const urlSchema = new mongoose.Schema({
    shortCode : String,
    longUrl:String
})
export const Url = mongoose.model("shortURL",urlSchema);
