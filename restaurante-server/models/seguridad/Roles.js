const mongoose = require('mongoose');

const RolesSchema = new mongoose.Schema({
    nombre: {
        type: String,
    }
},{
    // Se desactiva el campo de version __v
    versionKey: false
});

const Roles = mongoose.model("roles", RolesSchema);
module.exports = Roles;