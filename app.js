import express from 'express'
const app = express()

// socket.io setup
import http from 'http'


const port = 3000

app.use(express.static('public'));
app.get('/', (req,res)=>{
	res.sendFile(__dirname + '/index.html')
})




app.listen(port, ()=>{
	console.log(`example app listening on port ${port}`);
})