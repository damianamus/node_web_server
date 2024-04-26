//const { envs } =  require('./config/env')
//Lo mismo pero en fomrato ES6 aca abajo
import { envs } from './config/env.js'

//const { startServer } = require('./server/server')
//Lo mismo pero en fomrato ES6 aca abajo
import { startServer } from './server/server.js'



const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}



//Funcion anostica autoconvocada
//Agnostica porque no tiene nombre
//Autoconvocada porque la ejecutamos con paretensis del final
(async () => {
    main()
})()