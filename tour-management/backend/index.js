import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routers/tours.js'
import userRoute from './routers/users.js'
import authRoute from './routers/auth.js'
import reviewRoute from './routers/reviews.js'
import bookingRoute from './routers/booking.js'






dotenv.config()
const app = express()
app.use(express.urlencoded({ extended: true }));
const port  = process.env.Port || 8000
const corsOption ={
    origin:true,
    credentials:true
}

//database
mongoose.set("strictQuery",false)
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI ,{
            useNewUrlParser:true},
           { userUnifiedTopology:true
        })
        console.log('MongoDB connection...')
    }catch(err){
        console.log("connection fail..")

    }
}
app.use(
    express.urlencoded({ extended: true })
)
app.use(express.json())
app.use(cors(corsOption))
app.use(cookieParser())
app.use("/api/v1/tours",tourRoute)
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/users",userRoute)
app.use("/api/v1/review",reviewRoute)
app.use("/api/v1/booking",bookingRoute)


app.listen(port,()=>{
    connect()
    console.log('server listening',port)
})