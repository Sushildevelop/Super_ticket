const { User } = require("../models");

const jwt =require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "weqweqwe";
const EXPIRE_IN = Math.floor(new Date().getTime() / 1000) + 24 * 24 * 60 * 60;

function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

// Function to Create Token
function createAccesstoken(user) {
  const token = jwt.sign(
    {
      id: user.id,
      user_id: user.user_id,
      email_address: user.email_address,
      user_type: user.user_type,
      user_role: user.user_role,
      expiresIn: EXPIRE_IN,
    },
    SECRET_KEY
  ); // DO NOT KEEP YOUR SECRET IN THE CODE!

  // Update Token to user table
  const updateObj = {
    token: token,
    last_login: new Date(),
  };
  // // if (req.user.userType === "Customer")
  User.update(updateObj, { where: { id: user.id } });
  return token;    
}

// Function To create Refresh Token
// export const createRefreshToken = function(user) {
//   const payload = {
//     id: user._id,
//     exp: EXPIRE_IN
//   };
//   return jwt.encode(payload, SECRET_KEY);
// };

// Function To Decode Token
function decodeToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports={decodeToken,createAccesstoken, parseJwt}
