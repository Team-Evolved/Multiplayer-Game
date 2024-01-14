// Import ES6 modules

import express from 'express'
import http from 'http'
import {Server} from 'socket.io' // socket.io setup

// Create instances

const app = express()
const server = http.createServer(app)
const io = new Server(server, {pingInterval: 2000, pingTimeout: 8000})
const port = 3000

app.use(express.static('public'));
app.get('/', (req,res)=>{
	res.sendFile(__dirname + '/index.html')
})

const backEndPlayers     = {}
const backEndProjectiles = {}
const SPEED = 5
const RADIUS = 10
const PROJECTILE_RADIUS = 5
let projectileId = 0

io.on('connection', (socket) => {
  console.log('a user connected')

  io.emit('updatePlayers', backEndPlayers)

  socket.on('shoot', ({ x, y, angle }) => {
    projectileId++

app.listen(port, ()=>{
	console.log(`example app listening on port ${port}`);
})