import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'


//app config
const app = express()
const port = process.env.PORT || 4000 
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
 app.use(cors())


//  this is the working middleware because  in above middleware we 
//     not decalare the port yet that why we are getting the cors policy error 
//     app.use(cors({
//   origin: ["http://localhost:5173", "http://localhost:5174"],
//   credentials: true
// }));


//Api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user', userRouter)

//localhost:4000/api/admin/add-doctor

app.get('/', (req,res)=>{
    res.send('API is running...')
})

app.listen(port, ()=> console.log("Server started", port))