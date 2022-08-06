const mongoose = require('mongoose');

const ConsecutivosSchema = new mongoose.Schema({
    descripcion: {
        type: String,
    },
    valor: {
        type: Number,
    },
    prefijo: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Consecutivos = mongoose.model("consecutivos", ConsecutivosSchema);
module.exports = Consecutivos;