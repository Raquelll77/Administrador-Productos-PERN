import express from 'express';

const server = express();

//Routing
server.get('/', (req, res)=> {
    res.json('desde GET')
})

server.post('/', (req, res)=> {
    res.json('desde POST')
})

server.put('/', (req, res)=> {
    res.json('desde PUT')
})

server.patch('/', (req, res)=> {
    res.json('desde PATCH')
})

server.delete('/', (req, res)=> {
    res.json('desde DELETE')
})

export default server