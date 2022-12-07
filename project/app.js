const tasklist = require('./task')
const http = require('http');
const host = 'localhost'
const port = 8000


const  settask = (req , res )=>{
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.end(JSON.stringify( tasklist.task ))
}


const server = http.createServer(settask)
server.listen(port, host ,()=>{
    console.log(`the server it's runing in the ${host} with port ${port}`)
})
