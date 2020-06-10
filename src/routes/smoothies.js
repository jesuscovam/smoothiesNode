import { Router } from 'express'
import { capitalize } from '../utils'
const router = Router()

router.get('/', async (req, res) => {
    try {
        const smoothies = await req.context.models.Smoothies.find()
        if(smoothies !== []){
            return res.send(smoothies)
        } else {
            return res.send('no smoothies created')
        }
    } catch (error) {
        res.send('error getting smoothies', error)
    }

})

router.post('/', async (req, res) => {
    try {
        const { name, fruits, liquid, protein, taste } = req.body

        // calculate points
        let points = 0
        if (fruits.length > 1){
            const fruitPoints = fruits.reduce((a, b) => a + b.value, 0) 
            points = fruitPoints + parseInt(liquid.value)
 
        } else {
            points = fruits[0].value + parseInt(liquid.value)
        }
        console.log(points)
        const smoothie = req.context.models.Smoothies({
            name: capitalize(name),
            fruits,
            liquid, 
            protein,
            points,
            taste: parseInt(taste)
        })
        await smoothie.save()
        res.send(smoothie)
    } catch (error) {
        console.error('error creating smoothie', error)
        res.status(400).send('error creating smoothie', error)
    }
   
    
})

export default router