const jswtoken = require("jsonwebtoken");
const ingresar = (usuario, clave) => {
    //validar usuario
    if (usuario !== usuariobd.usuario || clave !== usuariobd.clave) {
        res.json({ mensaje: "Usuario y/o clave incorrectos." })
    }
    //crear token
    const token = jswtoken.sign(
        //pasamos datos del usuario
        { user: usuario },
        process.env.JWT_SECRET,
        { expiresIn: "4h" }
    )
    return token
}

module.exports = ingresar;