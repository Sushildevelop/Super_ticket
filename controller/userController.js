const { User } = require('../models');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const { createAccesstoken } = require('../utlis/jwt');






exports.register = async (req, res) => {
    try {
        const { name, email, password, roleId } = req.body;
   
    const hashed = await bcrypt.hash(password, 10);
    const createuser = await User.create({ name, email, password: hashed, roleId });
    res.status(201).json({ data:createuser })
    } catch (error) {
        return res.status(400).json({error:error.message})
        
    }
}
exports.login = async (req, res) => {
    try {
         const { email, password } = req.body;
        const user = await User.findOne({ where: { email }, include: 'role' });
        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token =createAccesstoken(user)
        res.json({ token });
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
       
 };

 exports.gettoken=async(req,res)=>{
    try {
        const id = req.user.id;
        const user1 = await User.findByPk(id, {
            attributes: ["id", "email"] // You can also add other fields if needed
          });
        return res.status(200).json(user1)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
 }
