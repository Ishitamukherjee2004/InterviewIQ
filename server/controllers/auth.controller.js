//frontend data
//Create User
//Token 
//Cookiestore
import User from '../models/user.model.js';
import genToken from '../config/token.js';

export const googleAuth = async(req, res)=>{
    try{
        
        const {name, email} = req.body;
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({name, email});
        }
        let token = await genToken(user._id);
        res.cookie("token", token, {
            http: true,
            secure: true,
            sameSite: "none",
            maxAge: 7*24*60*60*1000 //7 days converted to miliseconds
        })

        return res.status(200).json({message: "User authenticated successfully", user, token});
    }catch(error){
        console.error("Error during Google authentication:", error);
        res.status(500).json({message: "Internal server error: ", error});
    }
}

export const logOut = async(req, res)=>{
    try{
        await res.clearCookie("token")
        return res.status(200).json({message: "User logged out successfully"})
    }catch(error){
        console.error("Error during logout:", error);
        res.status(500).json({message: "Internal server error: ", error});
    }
}