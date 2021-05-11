const lblOnline = document.getElementById('lblOnline')
const lblOffline = document.getElementById('lblOffline')
const btnEnviar = document.getElementById('btnEnviar')
const txtMessage = document.getElementById('txtMessage')

const socket = io()

btnEnviar.addEventListener('click', ()=>{

    const mensaje = txtMessage.value
    const payload = {
        mensaje, 
        id: 123, 
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el servidor', id)
    })

    txtMessage.value = ''

})

socket.on('enviar-mensaje', (payload)=>{
    console.log(payload)
})

socket.on('connect', ()=>{
    console.log('Conectado')
    lblOnline.style.display = ''
    lblOffline.style.display = 'none'
})


socket.on('disconnect', ()=>{
    console.log('Desconectado')
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})