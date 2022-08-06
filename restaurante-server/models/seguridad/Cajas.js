const mongoose = require('mongoose');

const CajasSchema = new mongoose.Schema({
    fecha_registro: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    entrada_dinero: {
        type: Number,
    },
    apertura: {
        type: String,
    },
    cierre: {
        type: String,
    },
    restaurante: {
        type: String,
    },
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Cajas = mongoose.model("cajas", CajasSchema);
module.exports = Cajas;