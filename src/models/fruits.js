import mongoose from 'mongoose'

const Schema = mongoose.Schema

const fruitsSchema = new Schema({
    name:{
      type: String,
      unique: true,
      required: true
    },
    value: {
        type: String,
        required: true
    }
})

const model = mongoose.model('fruits', fruitsSchema)

export default model