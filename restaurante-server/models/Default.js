//
// Formato para crear las colecciones en el servidor
//

const mongoose = require('mongoose');

const DefaultSchema = new mongoose.Schema({
    campo1: {
        type: String,
    },
    campo2: {
        type: Number,
    },
    campo3: {
        type: ObjectId,
    },
    campo4: {
        type: Boolean,
    },
    campo5: {
        type: Date,
    },
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Nombre = mongoose.model("ingresar nombre de la coleccion", DefaultSchema);
module.exports = Nombre;