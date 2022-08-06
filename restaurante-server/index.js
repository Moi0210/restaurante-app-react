const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Seguridad
const Usuario = require('./models/seguridad/Usuario');
const Consecutivos = require('./models/seguridad/Consecutivos');
const Roles = require('./models/seguridad/Roles');
const Paises = require('./models/seguridad/Paises');
const Cajas = require('./models/seguridad/Cajas');
const Unidades = require('./models/seguridad/Unidades');

// Administracion
const Mesas = require('./models/seguridad/Mesas');
const Bebida = require("./models/administracion/Bebida");
const Buffet = require('./models/administracion/Buffet');
const Especialidades = require('./models/administracion/Especialidades');
const Empleados = require('./models/administracion/Empleados');
const Puestos = require('./models/administracion/Puestos');
const Productos = require('./models/administracion/Productos');
const Proveedores = require('./models/administracion/Proveedores');


app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://user1:ulacit@cluster0.nsk37jp.mongodb.net/restaurante?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
);

app.post('/insertar-bebida', async (req, res) => {
    const nombreBebida = req.body.nombre;
    const precioBebida = req.body.precio;

    const bebidaD = new bebidaModel({ nombre: nombreBebida, precio: precioBebida })

    try {
        await bebidaD.save();
        res.send("insertar bebida")
    } catch (e) {
        console.log("Ocurrio un error: " + e)
    }
})

// Registo/login
    app.post('/registrar-usuario', async (req, res) => {
        console.log(req.body);
        try {
            await Usuario.create({
                nombre: req.body.nombre,
                primer_apellido: req.body.primer_apellido,
                segundo_apellido: req.body.segundo_apellido,
                tel: req.body.tel,
                email: req.body.email,
                password: req.body.password
            })
            res.json({status: 'ok'})
        } catch (err) {
            res.json({status: 'error ', error: 'El correo ingresado ya está registrado.'})
        }
    })

    app.post('/logear-usuario', async (req, res) => {
        const usuario = await Usuario.findOne({ 
            email: req.body.email, 
            password: req.body.password
        })

        if (usuario) {
            return res.json({ status: 'ok', usuario: true, email: req.body.email})
        } else {
            return res.json({ status: 'error', usuario: false})
        }
    })
// Cierre registo/login

// Administracion
    app.get('/obtener-buffet', async (req, res) => {
        Buffet.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } 
            res.send(result);   
        })
    })

    app.get('/obtener-bebidas', async (req, res) => {
        Bebida.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } 

            res.send(result);   
        })
    })

    app.get('/obtener-especialidades', async (req, res) => {
        Especialidades.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } 

            res.send(result);   
        })
    })

    app.get('/obtener-mesas', async (req, res) => {
        Mesas.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } 

            res.send(result);   
        })
    })

    app.get('/obtener-empleados', async (req, res) => {
        Empleados.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } 

            res.send(result);   
        })
    })

    app.get('/obtener-puestos', async (req, res) => {
        Puestos.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } 

            res.send(result);   
        })
    })

    app.get('/obtener-productos', async (req, res) => {
        Productos.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } 

            res.send(result);   
        })
    })

    app.get('/obtener-proveedores', async (req, res) => {
        Proveedores.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } 

            res.send(result);   
        })
    })
// Cierre administracion

// Seguridad
    // Crear
        app.post('/insertar-usuarios', async (req, res) => {
            const nombreBebida = req.body.nombre;
            const precioBebida = req.body.precio;
        
            const bebidaD = new bebidaModel({ nombre: nombreBebida, precio: precioBebida })
        
            try {
                await bebidaD.save();
                res.send("insertar usuario")
            } catch (e) {
                console.log("Ocurrio un error: " + e)
            }
        })
    // Lectura
        app.get('/obtener-usuarios', async (req, res) => {
            Usuario.find({}, (err, result) => {
                if (err) {
                    res.send(err);
                } 

                res.send(result);   
            })
        })

        app.get('/obtener-consecutivos', async (req, res) => {
            Consecutivos.find({}, (err, result) => {
                if (err) {
                    res.send(err);
                } 

                res.send(result);   
            })
        })

        app.get('/obtener-roles', async (req, res) => {
            Roles.find({}, (err, result) => {
                if (err) {
                    res.send(err);
                } 

                res.send(result);   
            })
        })

        app.get('/obtener-paises', async (req, res) => {
            Paises.find({}, (err, result) => {
                if (err) {
                    res.send(err);
                } 

                res.send(result);   
            })
        })

        app.get('/obtener-cajas', async (req, res) => {
            Cajas.find({}, (err, result) => {
                if (err) {
                    res.send(err);
                } 

                res.send(result);   
            })
        })

        app.get('/obtener-unidades-de-medida', async (req, res) => {
            Unidades.find({}, (err, result) => {
                if (err) {
                    res.send(err);
                } 

                res.send(result);   
            })
        })
// Cierre seguridad

app.listen(4001, () => {
    console.log('Servidor en linea en el puerto: 4001')
});