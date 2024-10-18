import express from 'express';
import "dotenv/config.js"
import "./config/dataBase.js"
import cors from 'cors'
import morgan from 'morgan';
import indexRouter from './router/index.js'
import not_found_handler from './middlewarses/not_found_handler.js';
import errorServerHandler from './middlewarses/error_server_handler.js';
import badRequestHandler from './middlewarses/bad_request_handler.js';
import badgeGetaway from './middlewarses/bad_getaway_handler.js';

const server= express ()
const PORT= process.env.PORT
const Ready= ()=> console.log("El servidor esta listo en el puerto:"+PORT);

server.use(express.json())                        //permite leer json
server.use(express.urlencoded({extended:true}))   //permite leer formularios
server.use(cors())                                //es la parte de seguridad
server.use(morgan('dev'))                         //ayuda a ver las peticiones que se hacen
server.use('/shops', indexRouter)                 //hace uso del enrutador router
server.use(not_found_handler)                      //hace uso de un middleware cuando no se encuentra la peticion
server.use(errorServerHandler)                      //hace uso de un middleware cuando hay un error de servidor
server.use(badRequestHandler)                       //hace uso de un middleware cuando la peticion no es valida
server.use(badgeGetaway)                           //hace uso de un middleware cuando la peticion no puede ser procesada

server.listen(PORT, Ready)