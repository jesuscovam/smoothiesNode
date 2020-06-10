require('dotenv').config()

import Fruits from './fruits'
import Liquids from './liquids'
import Proteins from './proteins'
import Smoothies from './smoothies'

import mongoose from 'mongoose'

const connectDB = () =>
    mongoose.connect(process.env.DATABASE_URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

const models = { Fruits, Liquids, Proteins, Smoothies }
export { connectDB }
export default models