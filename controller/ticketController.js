
const {ticket} = require('../models');
const { generateID } = require('../utlis/generateId');

const createdTickets=async(req,res)=>{
    try {
        const userId=req.user.id
        const ticketgeneratId=generateID("Shus")
        const { ticketId,  title,description,assignId,priority, status}=req.body
        const creatTickt=await ticket.create({
            ticketId:ticketgeneratId,  title,description,assignId,priority, status, 
            userId:userId
        })
        return res.status(200).json({data:creatTickt})
        
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}
const updateTicket=async(req,res)=>{
    try {
        const userId=req.user.id;
        const {id}=req.params
        const {title,description}=req.body
        const updateTickt=await ticket.findOne({
            where:{
                id
            }
            })

        updateTickt.title=title,
        updateTickt.description=description
        await updateTickt.save()
        return res.status(200).json(updateTickt)
    } catch (error) {
        return res.status(400).json({error:error.message})
        
    }
}

const getallticket=async(req,res)=>{
    try {
        const gettikt=await ticket.findAll()
        return res.status(200).json(gettikt)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

const deleteticket=async(req,res)=>{
    try {
        const userId=req.user.id
        const {id}=req.params
        const deletetickt=await ticket.findByPk(id)
        await deletetickt.destroy()
        return res.status(200).json(deletetickt)
         
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports={createdTickets,updateTicket,getallticket,deleteticket}