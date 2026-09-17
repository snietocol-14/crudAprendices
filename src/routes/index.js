//consolidar rutas
const { Router } = require('express');
//importar enrutadores
const pruebaRouter = require('./pruebaRouter.js');

const enrutador = Router();

//usar enrutador
enrutador.use("/rutaPrueba", pruebaRouter);

module.exports = enrutador;