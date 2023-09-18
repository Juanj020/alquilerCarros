import mongo, { ObjectId } from 'mongodb';

const url = "mongodb+srv://juanj202122:12345@clusteralquiler.pvf4knp.mongodb.net/"

const cliente = new mongo.MongoClient(url);
cliente.connect();

const db = cliente.db("alquilerCarro");

const getClientes = async (req, res)=>{
    try {
        const coleccion = db.collection("Clientes");
        const respuesta = await coleccion.find().toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

const getAutosDisponibles = async (req, res)=>{
    try {
        const coleccion = db.collection("Autos");
        const respuesta = await coleccion.find({"estado":"disponible"}).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

const getAlquileresClientes = async (req, res)=>{
    try {
        const coleccion = db.collection("Alquileres");
        const respuesta = await coleccion.aggregate([
            {
                $lookup : {
                    from : "Clientes",
                    localField : "cliente",
                    foreignField : "_id",
                    as : "clien"
                }
            },
            {
                $match:{
                    "estado":"activo"
                }
            },
            {
                $project : {
                    "clien":1,
                    "estado":1
                }
            }
        ]).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

const getReservasPendientes = async (req, res)=>{
    try {
        const coleccion = db.collection("Reservas");
        const respuesta = await coleccion.aggregate([
            {
                $lookup : {
                    from : "Clientes",
                    localField : "id_cliente",
                    foreignField : "_id",
                    as : "clien"
                }
            },
            {
                $lookup : {
                    from : "Autos",
                    localField : "auto",
                    foreignField : "_id",
                    as : "auto"
                }
            },
            {
                $match:{
                    "estado":"pendiente"
                }
            },
            {
                $project : {
                    "clien":1,
                    "estado":1,
                    "auto": 1
                }
            }
        ]).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

const getAlquilerId = async (req, res)=>{
    try {
        const coleccion = db.collection("Alquileres");
        const respuesta = await coleccion.aggregate([
            {
                $lookup : {
                    from : "Clientes",
                    localField : "cliente",
                    foreignField : "_id",
                    as : "clien"
                }
            },
            {
                $lookup : {
                    from : "Autos",
                    localField : "auto",
                    foreignField : "_id",
                    as : "auto"
                }
            },
            {
                $lookup :{
                    from : "Sucursales",
                    localField : "sucursal",
                    foreignField : "_id",
                    as : "sucu"
                }
            },
            {
                $match:{
                    "_id" : new ObjectId("65072d74de2beed4af0d1c5d")
                }
            },
           /*  {
                $project : {
                    "clien" : 1,
                    "auto": 1,
                    "fecha_inicio_alquiler":1,
                    "fecha_fin_alquiler":1,
                    "fecha_fin_alquiler":1,
                    "sucu" : 1,
                    "monto":1,
                    "estado":1
                }
            } */
        ]).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
};

const getCargoEmpleado = async (req, res)=>{
    try {
        const coleccion = db.collection("Empleados");
        const respuesta = await coleccion.find({"cargo":"Vendedor"}).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

const getCantidadAutoSucu = async (req, res)=>{
    try {
        const coleccion = db.collection("Alquileres");
        const respuesta = await coleccion.aggregate([
            {
                $lookup : {
                    from : "Sucursales",
                    localField : "sucursal",
                    foreignField : "_id",
                    as : "sucu"
                }
            },
            {
                $unwind: "$sucu"
            },
            {
                $group: {
                    _id: "$sucu.nombre",
                    totalAutos: {
                        $sum: 1
                    }
                }
            },
            {
                $project: {
                    totalAutos : 1
                },
            },
        ]).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

const getCostoAlquiler = async (req, res) => {
    try {
        const coleccion = db.collection("Alquileres");
        const projection = { projection : ({ "monto": 1 })};
        const respuesta = await coleccion.find({ "_id" : new ObjectId("65072d74de2beed4af0d1c5d")},  projection).toArray();
        res.json(respuesta);
    } catch (error) {
        res.status(400).json({error : "f"});
        console.log(error);
    }
}

const getClienteEspecifico = async (req, res) => {
    try {
        const coleccion = db.collection("Clientes");
        const respuesta = await coleccion.find({ "dni" : 12345678}).toArray();
        res.json(respuesta);
    } catch (error) {
        res.status(400).json({error : "f"});
        console.log(error);
    }
}

const getAutosMayor5 = async (req, res) => {
    try {
        const coleccion = db.collection("Autos");
        const respuesta = await coleccion.find({"capacidad" : {$gt : 5}}).toArray();
        res.json(respuesta);
    } catch (error) {
        res.status(400).json({error : "f"});
        console.log(error);
    }
}

const getFechaInicioAlquiler = async (req, res)=>{
    try {
        const coleccion = db.collection("Alquileres");
        const respuesta = await coleccion.aggregate([
            {
                $lookup : {
                    from : "Clientes",
                    localField : "cliente",
                    foreignField : "_id",
                    as : "clien"
                }
            },
            {
                $lookup : {
                    from : "Autos",
                    localField : "auto",
                    foreignField : "_id",
                    as : "auto"
                }
            },
            {
                $lookup :{
                    from : "Sucursales",
                    localField : "sucursal",
                    foreignField : "_id",
                    as : "sucu"
                }
            },
            {
                $match : {
                    "fecha_inicio_alquiler" : new Date("2023-07-05")
                }
            }
        ]).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

const getReservasPendientesCliente = async (req, res)=>{
    try {
        const coleccion = db.collection("Reservas");
        const respuesta = await coleccion.aggregate([
            {
                $lookup : {
                    from : "Clientes",
                    localField : "id_cliente",
                    foreignField : "_id",
                    as : "clien"
                }
            },
            {
                $lookup : {
                    from : "Autos",
                    localField : "auto",
                    foreignField : "_id",
                    as : "auto"
                }
            },
            {
                $match:{
                    "estado":"pendiente",
                    "id_cliente" : new ObjectId("6506fadbde2beed4af0d1c34")
                }
            }
        ]).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

const getEmpleadosEspecificos = async (req, res) => {
    try {
        const coleccion = db.collection("Empleados");
        const respuesta = await coleccion.find({"cargo" : {$in : ["Gerente","Asistente"]}}).toArray();
        res.json(respuesta);
    } catch (error) {
        res.status(400).json({error : "f"});
        console.log(error);
    }
}

const getClienteAlmenosUno = async (req, res) => {
    try {
        const coleccion = db.collection("Alquileres");
        const respuesta = await coleccion.aggregate([
            {
                $lookup: {
                    from: "Clientes",
                    localField: "cliente",
                    foreignField: "_id",
                    as: "cliente_info"
                }
            },
            {
                $unwind: "$cliente_info" 
            },
            {
                $group: {
                    _id: "$cliente_info._id", 
                    nombre: { $first: "$cliente_info.nombre" }, 
                    numAlquileres: { $sum: 1 }
                }
            },
            {
                $match: {
                    numAlquileres: { $gte: 1 } 
                }
            }
        ]).toArray();
        res.json(respuesta);
    } catch (error) {
        res.status(400).json({error : "f"});
        console.log(error);
    }
}

const getAutosOrdenados = async (req, res) => {
    try {
        const coleccion = db.collection("Autos");
        const respuesta = await coleccion.find().sort({ "marca": 1, "modelo": 1 }).toArray();
        res.json(respuesta);
    } catch (error) {
        res.status(400).json({error : "f"});
        console.log(error);
    }
}

const getCantidadAutoDireccion = async (req, res)=>{
    try {
        const coleccion = db.collection("Alquileres");
        const respuesta = await coleccion.aggregate([
            {
                $lookup : {
                    from : "Sucursales",
                    localField : "sucursal",
                    foreignField : "_id",
                    as : "sucu"
                }
            },
            {
                $unwind: "$sucu"
            },
            {
                $group: {
                    _id: "$sucu.nombre",
                    totalAutos: {
                        $sum: 1
                    },
                    direccion : {$first : "$sucu.direccion"} 
                }
            },
            {
                $project: {
                    totalAutos : 1,
                    direccion : 1
                },
            },
        ]).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

const getTotalAlquileres = async (req, res)=>{
    try {
        const coleccion = db.collection("Alquileres");
        const respuesta = await coleccion.aggregate([
            {
                $group: {
                    _id: null,
                    totalAlquileres: {
                        $sum: 1
                    },
                }
            },
            {
                $project: {
                    totalAlquileres : 1
                },
            },
        ]).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

const getAutosMayor5Disponibles = async (req, res) => {
    try {
        const coleccion = db.collection("Autos");
        const respuesta = await coleccion.find({ "capacidad": { $gte: 5 }, "estado": "disponible" }).toArray();
        res.json(respuesta);
    } catch (error) {
        res.status(400).json({error : "f"});
        console.log(error);
    }
}  

const getFechaEntreAlquiler = async (req, res)=>{
    try {
        const coleccion = db.collection("Alquileres");
        const respuesta = await coleccion.aggregate([
            {
                $lookup : {
                    from : "Clientes",
                    localField : "cliente",
                    foreignField : "_id",
                    as : "clien"
                }
            },
            {
                $lookup : {
                    from : "Autos",
                    localField : "auto",
                    foreignField : "_id",
                    as : "auto"
                }
            },
            {
                $lookup :{
                    from : "Sucursales",
                    localField : "sucursal",
                    foreignField : "_id",
                    as : "sucu"
                }
            },
            {
                $match : {
                    "fecha_inicio_alquiler" : {
                        $gte : new Date("2023-07-05"),
                        $lte : new Date("2023-07-10")
                    }   
                }
            }
        ]).toArray();
        res.json(respuesta)
    } catch (error) {
        res.status(400).json({error : "f"})
        console.log(error);
    }
}

export {getClientes, getAutosDisponibles,getAlquileresClientes, getReservasPendientes, getAlquilerId, getCargoEmpleado, getCantidadAutoSucu,
     getCostoAlquiler, getClienteEspecifico, getAutosMayor5, getFechaInicioAlquiler, getReservasPendientesCliente, getEmpleadosEspecificos,
     getClienteAlmenosUno, getAutosOrdenados, getCantidadAutoDireccion, getTotalAlquileres, getAutosMayor5Disponibles, getFechaEntreAlquiler}