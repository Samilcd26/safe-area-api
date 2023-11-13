let socket = io();

socket.on('connect', ()=>{
    console.log('Connected to server');
})

socket.on('disconnect',()=>{
    console.log('disconnevted from server')
})
socket.on('newMessage',(message)=>{
    console.log('new message', message)
})