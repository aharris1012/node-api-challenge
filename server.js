const express = require('express');
const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');
const server = express();

const logger =(req,res, next) =>{
    console.log (`${req.method } to ${req.path}`);
    next();
    }
    server.use(logger);
    
    server.use(express.json());
    server.use('/api/projects', projectRouter);
     server.use('/api/actions', actionRouter);

     server.get("/", (req, res) =>{
        res.send("hello you reached the server");
        })
        module.exports = server;
        
    

