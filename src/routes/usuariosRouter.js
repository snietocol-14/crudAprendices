const { Router } = require('express');
const enrutador = Router();
const {listarUsuarios, crearUsuario} = require("../controllers/usuariosController")

enrutador.get("/usuarios", listarUsuarios);
enrutador.post("/usuarios", crearUsuario);

module.exports = enrutador;