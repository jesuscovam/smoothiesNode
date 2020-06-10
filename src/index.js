require('dotenv').config()
import express from 'express'
import cors from 'cors'
import models, { connectDB } from './models/index'
import router from './routes'

// Config //
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middlewares //
app.use((req, res, next) => {
  req.context = {
    models,
  }
  next()
})

// Routes //
app.use('/ingredients', router.ingredients)
app.use('/smoothies', router.smoothies)

const port = process.env.PORT || 5000
const eraseDatabaseOnSync = true


connectDB().then(async () =>{
  console.log('MongoDB connected')
  if(eraseDatabaseOnSync){
    await models.Smoothies.deleteMany({})
  }
  app.listen(port, (error) => {
    error ? console.error('Error starting server', error)
    : console.log(`app running @ http://localhost:${port}`)
  })  
}).catch(error => console.error('Error connecting to mongoDB', error))



