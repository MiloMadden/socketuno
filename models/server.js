const express = require('express')
const cors = require('cors')
const {socketController} = require('../sockets/controller')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.server = require('http').createServer(this.app)

        this.io = require('socket.io')(this.server);

        // middlewares
        this.middlewares()

        // SOCKETS
        this.sockets()

    }

    sockets(){

        this.io.on('connection', socketController)

    }

    middlewares(){

        //CORS
        this.app.use( cors() )

        //Public Folder
        this.app.use(express.static('public'))

    }

    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`App running in port ${this.port}`)
        })
    }

}

module.exports = Server