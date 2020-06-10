import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
    const fruits = await req.context.models.Fruits.find()
    const liquids = await req.context.models.Liquids.find()
    const proteins = await req.context.models.Proteins.find()
    const ingredients = {
        fruits,
        liquids,
        proteins
    }
    return res.send(ingredients)
})

export default router