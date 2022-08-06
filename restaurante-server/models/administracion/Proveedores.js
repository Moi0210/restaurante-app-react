const mongoose = require('mongoose');

const ProveedoresSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    primerapellido: {
        type: String,
    },
    segundoapelido: {
        type: String,
    },
    teloficina: {
        type: String,
    },
    fax: {
        type: String,
    },
    celular: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Proveedores = mongoose.model("proveedores", ProveedoresSchema);
module.exports = Proveedores;