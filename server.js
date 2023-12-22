import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv/config'
import { connectDb } from './connection/db.js'
import userRoutes from './routes/Vet.route.js'
import patientsRoutes from './routes/patients.route.js'

connectDb()

const app = express()


const PORT = process.env.PORT || 3026

const dominiosPermitdios =['https://apv.jzgdevs.cloud/', 'https://apv.jzgdevs.cloud'];

const corsOption = {
  origin: function(origin, callback) {
    if(dominiosPermitdios.indexOf(origin) !== -1){
      //el origen está permitido
      callback(null, true)
    }else {
      callback(new Error('No permitido por CORS'))
    }
  }
}

corsOption
//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/veterinarians', userRoutes);
app.use('/api/patients', patientsRoutes);


//listen
app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
