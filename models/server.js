import express from "express";

import routerRutas from "./../routes/rutas.routes.js"

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            rutas: "/api/rutas",
        }
        this.middlewares();
        this.routes()
    }
    middlewares(){
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.path.rutas,routerRutas);
    }
    listen(){
        this.app.listen(5000,()=>{
            console.log(`Servidor levantado en el puerto 5000`);
        })
    }
}
export {Server}