
const express=require('express')
const { register, login, gettoken } = require('../controller/userController')
const auth = require('../middleware/auth')
const { createdTickets, updateTicket, getallticket, deleteticket } = require('../controller/ticketController')
const rabc=require('../middleware/rabc')
const api=express.Router()


// User 

api.post("/register",register)
api.get("/gettoken",auth.authorization,gettoken)
api.post('/login',login)

// Ticket
api.post('/creatticket',auth.authorization,rabc(["user","admin","manager"]),createdTickets)
api.put('/updateticket/:id',auth.authorization,rabc(["user","admin"]),updateTicket)
api.get('/getticket',auth.authorization,rabc(['staff',"user","admin","manager"]),getallticket)
api.delete('/deleteticket/:id',auth.authorization,rabc(['admin','manager']),deleteticket)

module.exports={api}