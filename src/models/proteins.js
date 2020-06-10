import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Proteins = new Schema({
    name:{
      type: String,
      unique: true,
      required: true
    },
})

const model = mongoose.model('proteins', Proteins)

export default model