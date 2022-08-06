const mongoose = require('mongoose');

const PuestosSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    Rol: {
        type: String,
    },
    interno: {
        type: String,
    },
    externo: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Puestos = mongoose.model("puestos", PuestosSchema);
module.exports = Puestos;