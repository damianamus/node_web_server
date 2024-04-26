// const express = require('express')
// const path = require('path')

//Lo mismo pero con formato ES6
import express from'express'
import path from 'path'

export const startServer = (options) => {
    const {port, public_path = 'public'} = options
    // console.log(port)
    // console.log(public_path)

    const app = express()

    //Para poder usar middleware hay que usar la palabra "use", esto es propio de express

    app.use(express.static(public_path)) //contenido estatico que ponemos dispoonible

    app.get('*', (req, res) => {

        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })
}


//Se elimima esto y se agrega la palabra export delante de la declaracion de la funcion
// module.exports = {
//     startServer
// }