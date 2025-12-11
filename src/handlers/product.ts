import { Request, Response } from "express"
import Product from "../models/Product.model"

//siempre que interactuamos con los modelos las funciones tienen que ser asincronas detener el codigo hasta obtener resultados
export const createProduct = async (req : Request, res : Response)=> {

    const product = new Product(req.body)

    //almacenar en la base de datos
    product.save()
    res.json({data: product})
}