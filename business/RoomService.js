const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const { generateRoomName } = require('../helper/random/roomName');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);


const joinToUser = (req,res,next)=>{
    io.sockets.on('connection', function(socket) {
        var roomName =generateRoomName()
        socket.on('create', roomName);


      });
}



module.exports ={joinToUser}