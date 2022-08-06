const mongoose = require('mongoose');

const PaisesSchema = new mongoose.Schema({
    pais: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Paises = mongoose.model("paises", PaisesSchema);
module.exports = Paises;