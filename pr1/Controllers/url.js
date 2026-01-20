import { Url } from "../Models/Url.js";
import shortid from "shortid";
export const shortUrl = async (req,res)=>{
    const longUrl = req.body.longUrl;
    const shortCode = shortid.generate();
    const shortUrl = `http://localhost:1000/${shortCode}`;
    const newUrl = new Url({
        shortCode,longUrl})
    await newUrl.save();
    console.log(`Short URL is ${newUrl}`);
    res.render("index.ejs",{shortUrl:shortUrl});    


} 
export const getOriginalUrl = async (req,res)=>{
    const shortCode = req.params.shortCode;
    const originalUrl = await Url.findOne({shortCode})
    if(originalUrl){
        res.redirect(originalUrl.longUrl);
    }
    

}