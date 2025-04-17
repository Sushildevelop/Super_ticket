const jwt = require('jsonwebtoken');
const { decodeToken } = require('../utlis/jwt');


const authorization=async(req,res,next)=>{

    let authHeader=req.headers.authorization

    if(!authHeader ){
        
        return res.status(401).json({message:"No token,authorizatio denied"})
    }
    
    const token = req.headers.authorization.replace(/^Bearer\s+/, "");
 
    console.log(token);

  
        try {
            const decoded=decodeToken(token,process.env.JWT_SECRET)
            console.log(decoded);
            
            req.user=decoded
    
                 
            // req.user
            next()
            
        } catch (err) {
            res.status(401).json({message:"Token is not valid"})
            
        }
   
}
module.exports={authorization}
