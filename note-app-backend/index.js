const express = require('express')
const cors = require('cors')
const {connection} = require("./db")
const { userRouter } = require('./routes/user.routes')
const { noteRouter } = require('./routes/note.routes')
require("dotenv").config()
const port = process.env.PORT
const app = express()
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
  };
app.use(cors(corsOptions))
app.use(express.json()) // Middle
app.use("/user",userRouter)
app.use("/note",noteRouter)
app.get("/",(req,res)=>{
    res.send({
        message:"api is working now"
    })
})

app.listen(port,async()=>{
    try{
        await connection
        console.log("db is connected ")
    }catch(error){
        console.log(error)
    }
    console.log(`Server is running on ${port}`)
})

module.exports =app