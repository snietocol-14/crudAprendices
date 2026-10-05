const jswtoken = require("jsonwebtoken")

//importar servicio
const ingresar = require("../services/autenticarService");
const listarUsuario = async (req, res)=>{
    res.json({mensaje: "listado de usuarios"})
}

module.exports = listarUsuario;