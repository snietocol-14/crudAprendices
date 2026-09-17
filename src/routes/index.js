//consolidar rutas
const { Router } = require('express');
//importar enrutadores
const pruebaRouter = require('./pruebaRouter.js');
const autenticarRouter = require('./autenticarRouter.js');

const enrutador = Router();

//usar enrutador
enrutador.use("/rutaPrueba", pruebaRouter);
enrutador.use("/autenticar", autenticarRouter);

module.exports = enrutador;