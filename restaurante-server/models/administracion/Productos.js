const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    cantidad: {
        type: Number,
    },
    restaurante: {
        type: String,
    },
    tipo_producto: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Productos = mongoose.model("producto", ProductosSchema);
module.exports = Productos;