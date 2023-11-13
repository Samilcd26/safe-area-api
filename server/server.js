const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const path = require('path');

const publicPath = path.join(__dirname, '/../public')

const app = express();
const server = createServer(app);
const io = new Server(server);



app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '/../public/index.html'));
});

io.on('connection', (socket) => {
 
  socket.emit('newMessage',{
    from:'Admin',
    text:'Welcome to the chat app!',
    createdAt: new Date().getTime()
  })


  socket.broadcast.emit('newMessage',{
    from:'Admin',
    text:'Welcome to the chat app!',
    createdAt: new Date().getTime()
  })

  socket.on('createMessage',(message)=>{
    console.log('A created message '+ message)
    io.emit('newMessage',{
      from:message.from,
      text:message.text,
      createdAt: new Date().getTime()
    })
  })

  socket.on('disconnect',()=>{
    console.log('A disconnectsed')
  })
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});