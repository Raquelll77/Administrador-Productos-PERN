import { Router } from "express"

const router = Router()
router.get('/', (req, res)=> {
    res.json('desde GET')
})

router.post('/', (req, res)=> {
    res.json('desde POST')
})

router.put('/', (req, res)=> {
    res.json('desde PUT')
})

router.patch('/', (req, res)=> {
    res.json('desde PATCH')
})

router.delete('/', (req, res)=> {
    res.json('desde PATCH')
})

export default router