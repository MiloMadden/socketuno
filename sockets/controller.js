
const socketController = (socket)=>{

    console.log('cliente conectado', socket.id)


    socket.on('enviar-mensaje', (payload, callback)=>{

        const id = 12345
        callback(id)
        //console.log(payload)
        socket.broadcast.emit('enviar-mensaje', payload)

    })


    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado')
    })

}

module.exports = {
    socketController
}