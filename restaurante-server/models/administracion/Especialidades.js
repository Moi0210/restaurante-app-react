const mongoose = require('mongoose');

const EspecialidadesSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    precio: {
        type: Number,
    },
    restaurante: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Especialidades = mongoose.model("especialidades", EspecialidadesSchema);
module.exports = Especialidades;