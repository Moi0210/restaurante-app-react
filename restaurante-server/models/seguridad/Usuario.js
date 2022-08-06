const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    primer_apellido: {
        type: String,
    },
    segundo_apellido: {
        type: String,
    },
    tel: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);
module.exports = Usuario;