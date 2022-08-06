const mongoose = require('mongoose');

const MesasSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    sillas: {
        type: Number,
    },
    restaurante: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Mesas = mongoose.model("mesas", MesasSchema);
module.exports = Mesas;