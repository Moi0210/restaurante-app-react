const mongoose = require('mongoose');

const BebidasSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    precio: {
        type: Number,
    },
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Bebida = mongoose.model("bebidas", BebidasSchema);
module.exports = Bebida;