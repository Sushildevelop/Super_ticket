const express=require('express')
const { dbconnection } = require('./config/dbconnect');
const { api } = require('./routes/routes');
// const { router } = require('./route/route')

const app=express()
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',api)

app.listen(process.env.PORT,async()=>{
        console.log(`Server is listening at ${process.env.PORT}`);
        await dbconnection()
        
})