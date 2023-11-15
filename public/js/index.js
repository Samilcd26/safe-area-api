let socket = io();

socket.on('connect', ()=>{
    console.log('Connected to server');
})

socket.on('disconnect',()=>{
    console.log('disconnevted from server')
})
socket.on('newMessage',(message)=>{
    console.log('new message', message);

    let li = document.createElement('li');
    li.innerText=`${message.from}: ${message.text}`;

    document.querySelector('body').appendChild(li)
})

socket.emit('createMessage',{
    from:'John',
    text:'Hey'
},()=>{
    console.log('Server got it.')
})

document.querySelector('#submit-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    

    socket.emit('createMessage',{
        from:"User",
        text:document.querySelector('input[name="message"]').value
    },()=>{

    })
})