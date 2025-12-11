import { Router } from "express"
import {body} from 'express-validator'
import { createProduct } from "./handlers/product"

const router = Router()
router.get('/', (req, res)=> {
    res.json('desde GET')
})

router.post('/', 
    
        //validacion 
    body('name')
        .notEmpty().withMessage('El nombre del Producto no puede ir vacio'),

    body('price')
        .isNumeric().withMessage('Valor no valido')
        .notEmpty().withMessage('El precio del Producto no puede ir vacio')
        .custom(value =>value >0).withMessage('Precio no válido'),

    createProduct

)

router.put('/', (req, res)=> {
    res.json('desde PUT')
})

router.patch('/', (req, res)=> {
    res.json('desde PATCH')
})

router.delete('/', (req, res)=> {
    res.json('desde DELETE')
})

export default router