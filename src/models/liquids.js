import mongoose from 'mongoose'

const Schema = mongoose.Schema

const liquidsSchema = new Schema({
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

const model = mongoose.model('liquids', liquidsSchema)

export default model