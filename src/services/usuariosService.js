//orm prisma
const ormPrisma = require("../config/db")
const datosBD = [{"nombre": "Sofia", "cargo": "Aprendiz"}]

const listarTodo = async() => {
    const datos = await ormPrisma.Usuarios.findMany();
    return datos
}

const crear = async(email, name, clave) => {
    const userNew = await ormPrisma.Usuarios.create({data: {
        name: name,
        email: email,
        clave: clave
    }})
    return userNew
}

module.exports = {listarTodo, crear}
