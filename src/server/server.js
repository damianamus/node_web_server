const express = require('express')
const path = require('path')

const startServer = (options) => {
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

module.exports = {
    startServer
}