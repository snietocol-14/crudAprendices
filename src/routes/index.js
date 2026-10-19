//consolidar rutas
const { Router } = require('express');
//importar enrutadores
const pruebaRouter = require('./pruebaRouter.js');
const autenticarRouter = require('./autenticarRouter.js');
const usuariosRouter = require('./usuariosRouter.js');
const enrutador = Router();

//usar enrutador
enrutador.use("/rutaPrueba", pruebaRouter);
enrutador.use("/autenticar", autenticarRouter);
enrutador.use("/usuarios", usuariosRouter);

module.exports = enrutador;