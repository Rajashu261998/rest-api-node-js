const express = require("express")

const {connection} = require("./db")
const {userRouter} = require("./routes/user.routes")
require("dotenv").config()
const app = express()

app.use("/",userRouter)


app.listen(process.env.port, async ()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log("Error in connecting to db")
        console.log(err)
    }
    console.log(`server is running at port ${process.env.port}`)
})
