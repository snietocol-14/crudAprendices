const { Router } = require('express');
const enrutador = Router();

enrutador.get("/usuarios", (req, res)=>{
    res.json({mensaje: "Ruta de prueba de 3407184"})
})

module.exports = enrutador;