const mongoose = require('mongoose');

const UnidadesSchema = new mongoose.Schema({
    unidad: {
        type: String,
    },
    descripcion: {
        type: Array,
    },
    detalle: {
        type: String,
    },
    simbologia: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Unidades = mongoose.model("unidades", UnidadesSchema);
module.exports = Unidades;