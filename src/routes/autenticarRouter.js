const { Router } = require('express');

const enrutador = Router();
//esta función la vamos a pasar al enrutador
//importamos del controlador
const iniciarSesion = require('../controllers/autenticarController');

enrutador.post("/login", iniciarSesion);

enrutador.post("/registro", (req, res)=>{
    res.json({mensaje: "Ruta de registro"})
})

module.exports = enrutador;
