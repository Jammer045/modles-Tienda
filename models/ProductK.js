import { Schema, model } from "mongoose";

let collection = "products";
let schema= new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    mark: {type: String, required: true},
    type: {type: String, required: true},
},{
    timestamps: true
})

let Product= model(collection, schema);

export default Product