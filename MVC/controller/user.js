import { User } from "../Models/User.js";
export const userRegister = async (req, res) => {
    // This should now log the body, whether it's from a form or JSON
    try {
        let user = await User.create(req.body);
        res.json({
        message: "Form data received successfully",
        Newuser: user,
        success: true,

    });
        
    }catch(err){
        console.log(err);
    }

};