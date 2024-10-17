import express from 'express';
import "dotenv/config.js"
import "./config/dataBase.js"

const server= express ()
const PORT= process.env.PORT
const Ready= ()=> console.log("El servidor esta listo en el puerto:"+PORT);

server.listen(PORT, Ready)