const manejadorErrores = (error, req, res, next) => {
    const codigoEstado = error.statusCode || 500
    const mensaje = error.message || "Error inesperado"
    console.error(`Hubo un error: ${new Date().toISOString()} - ${codigoEstado} - ${mensaje}`)
    //verificar más info del error
    if (error.stack) {
        console.error(error.stack)
    }
    //respuesta en json
    res.json({
        estado: "ERROR",
        codigoEstado,
        mensaje,
        //solo cuando está en desarrollo
        ...(process.env.NODE_ENV === "development" && {stack: error.stack})
    })
    
}

module.exports = manejadorErrores