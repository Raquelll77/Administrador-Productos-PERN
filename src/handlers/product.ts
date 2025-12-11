import { Request, Response } from "express"
import {validationResult} from 'express-validator'
import Product from "../models/Product.model"

//siempre que interactuamos con los modelos las funciones tienen que ser asincronas detener el codigo hasta obtener resultados
export const createProduct = async (req : Request, res : Response)=> {
    // otra manera de hacerlo creando el objeto
    // const product = new Product(req.body)

    // //almacenar en la base de datos
    // const savedProduct = await product.save()
    // res.json({data: savedProduct})



    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    
    //manera directa de hacerlo usando las propiedades de los modelos
    const product = await Product.create(req.body)
    
    res.json({data: product})
}