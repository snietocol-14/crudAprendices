const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PUERTO || 3111;
//body-parser
app.use(express.json())

//uso de librería multer
const multer = require("multer")
//configurar almacenamiento
const almacenamiento = multer.diskStorage({
    destination :(req, file, cb) => {
        cb(null, "misimagenes/")
    },
    filename: (req, file, cb) => {
        //extraer la extensión y después g
        cb(null, '${Date.now()}')
    }
})

const cargar = multer({storage: almacenamiento})

//libreria para leer archivo
const sistemaArchivo = require('fs');
const ruta = require('path');
//generar una ruta para el archivo aprendices.json
const rutaArchivoJson = ruta.join(__dirname, 'datos.json');
//ruta raiz
app.get('/', (req, res) => {
    res.send('API RESTFUL - CRUD Aprendices');
});

//endpoint para obtener todos los aprendices
app.get('/api/aprendices', (req, res) => {
    //const listaAprendices = []
    sistemaArchivo.readFile(rutaArchivoJson, "utf-8", (error, datos) => {
        if (error) {
            res.status(500).json({ Error: "Error al leer el archivo, conxion bd" })
        }
        const listaAprendices = JSON.parse(datos);
        res.json(listaAprendices);
    });
});

//endpoint crear un aprendiz
app.post("/api/aprendices", cargar.single("imagen"), (req, res) => {
    const datoAprendiz = req.body
    //modificar datoAprendiz con la ruta de la foto
    datoAprendiz.avatar = req.filename ? '/misimagenes/${req.file.filename}' : "sin imagen"
    sistemaArchivo.readFile(rutaArchivoJson, "utf-8", (error, datos)=>{
        if (error) {
            res.status(500).json({ Error: "Error al leer el archivo, conexion bd" })
        }
        const listaAprendices = JSON.parse(datos);
        //adicionar a la lista el nuevo aprendiz
        listaAprendices.push(datoAprendiz)
        //adicionar al archivo el nuevo aprendiz
        sistemaArchivo.writeFile(rutaArchivoJson, JSON.stringify(listaAprendices,null, 2),(error)=>{
            if(error){
                res.status(500).json({Error: "No se puede registrar el aprendiz."})
            }
            res.json(datoAprendiz)
        })
        
    })
})

//Endpoint para editar un aprendiz
app.put("/api/aprendices/:dni", (req, res)=>{
    const dni = parseInt(req.params.dni)
    const datosAprendiz = req.body
    sistemaArchivo.readFile(rutaArchivoJson, "utf-8", (error, datos)=>{
        if (error) {
            res.status(500).json({ Error: "Error al leer el archivo, conxion bd" })
        }
        let listaAprendices = JSON.parse(datos);
        //modificar datos de un aprendiz

        listaAprendices = listaAprendices.map(aprendiz => {
                return aprendiz.dni === dni ? {...aprendiz, ...datosAprendiz } : aprendiz
            })
        //adicionar al archivo el nuevo aprendiz
        sistemaArchivo.writeFile(rutaArchivoJson, JSON.stringify(listaAprendices,null, 2),(error)=>{
            if(error){
                res.status(500).json({Error: "No se puede registrar el aprendiz."})
            }
            res.json(datosAprendiz)
        })
        
    })
})

app.post("/datosJson", (req, res)=>{
    const datosRecibidos = req.body
    //validar que los datos son recibidos
    if(datosRecibidos){
        res.status(200).json({"mensaje":"Datos recibidos correctamente"})
    }
    res.status(500).json({"mensaje":"No se recibieron datos"})
})

// Modo de escucha del servidor
app.listen(port, () => {
    console.log(`SERVER: http://localhost:${port}`)
})