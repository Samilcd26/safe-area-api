const express = require("express")
const routers = require("./controller/index")
const customErrorHandler = require('./helper/error/CustomErrorHandle.js')
const path = require("path")
const cors = require('cors')
const { join } = require('node:path');
const { joinToUser } = require("./business/RoomService.js")
const { createServer } = require("http")
const { Server } = require("socket.io")
require('dotenv').config()
require('./business/RoomService.js')

const app = express()
const http = require('http').Server(app);

const server = createServer(app);
const io = new Server(server);

//Express Body middleware
app.use(express.json())
app.use(cors())
const PORT =process.env.PORT

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
  });


server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}}`)
})