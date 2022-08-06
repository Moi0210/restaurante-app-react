const mongoose = require('mongoose');

const BuffetSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    precio: {
        type: Number,
    },
    tipocomida: {
        type: String,
    },
    umedida: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Buffet = mongoose.model("buffet", BuffetSchema);
module.exports = Buffet;