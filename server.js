import express from 'express';
import "dotenv/config.js"
import "./config/dataBase.js"
import cors from 'cors'
import morgan from 'morgan';
import indexRouter from './router/index.js'

const server= express ()
const PORT= process.env.PORT
const Ready= ()=> console.log("El servidor esta listo en el puerto:"+PORT);

server.use(express.json())                        //permite leer json
server.use(express.urlencoded({extended:true}))   //permite leer formularios
server.use(cors())                                //es la parte de seguridad
server.use(morgan('dev'))                         //ayuda a ver las peticiones que se hacen
server.use('/shops', indexRouter)                 //hace uso del enrutador router

server.listen(PORT, Ready)