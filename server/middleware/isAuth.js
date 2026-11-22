import jwt from "jsonwebtoken";

const isAuth = async(req, res, next)=>{
    try{
        let {token}= req.cookies;
        if(!token){
            return res.status(400).json({message:"User doesn't have a token"})

        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!verifyToken){
            return res.status(400).json({message:"Invalid token"})
        }
        req.userId = verifyToken.userId;
        next();
    }catch(error){
        console.error("Error in authentication middleware:", error);
        res.status(500).json({message: "Internal server error: ", error});
    }
}

export default isAuth;