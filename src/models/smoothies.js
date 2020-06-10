import mongoose from 'mongoose'

const Schema = mongoose.Schema

const FruitsSchema = Schema({
    name: String,
    value: Number
})
const LiquidSchema = Schema({
    name: String,
    value: Number
})
const ProteinSchema = Schema({
    name: String
})

const SmoothieSchema = Schema({
    name:{
        type: String,
        required: true
    },
    fruits: [FruitsSchema],
    liquid: LiquidSchema,
    protein: ProteinSchema,
    points: {
        type: Number,
        required: true
    },
    taste: {
        type: Number,
        required: true
    }
})

const model = mongoose.model('Smoothie', SmoothieSchema)
export default model