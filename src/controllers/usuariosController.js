
const {listarTodo, crear} = require("../services/usuariosService");
//función para listar todos los usuarios
const listarUsuarios = async (req, res) => {
    try {
        const Usuarios = await listarTodo();
        res.status(200).json({Usuarios});
    } catch (error) {
        res.status(500).json({Error: error.message});
    }
}

const crearUsuario = async (req, res) => {
    try {
        const {email, name, clave} = req.body;
        const usuarioNuevo = await crear(email, name, clave);
        res.json({usuarioNuevo});
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
}
    
module.exports = {listarUsuarios, crearUsuario};