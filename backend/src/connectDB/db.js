import express from "express"
import mongoose from "mongoose"

function connect(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connection done")
    })
    .catch((error)=>{
        console.log(`error in connection ${error}`)
    })

}

export default connect