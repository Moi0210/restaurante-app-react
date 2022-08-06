const mongoose = require('mongoose');

const EmpleadosSchema = new mongoose.Schema({
    cedula: {
        type: String,
    },
    precio: {
        type: String,
    },
    primera_pellido: {
        type: String,
    },
    segundo_apellido: {
        type: String,
    },
    tel1: {
        type: String,
    },
    tel2: {
        type: String,
    },
    puesto: {
        type: String,
    },
    restaurante: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Empleados = mongoose.model("empleados", EmpleadosSchema);
module.exports = Empleados;