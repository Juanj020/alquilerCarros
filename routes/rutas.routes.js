import { Router } from "express";
import { getClientes, getAutosDisponibles, getAlquileresClientes, getReservasPendientes, getAlquilerId,
    getCargoEmpleado, getCantidadAutoSucu,getCostoAlquiler ,getClienteEspecifico, getAutosMayor5, getFechaInicioAlquiler,
    getReservasPendientesCliente, getEmpleadosEspecificos, getClienteAlmenosUno, getAutosOrdenados, getCantidadAutoDireccion,
    getTotalAlquileres, getAutosMayor5Disponibles, getFechaEntreAlquiler } from "../controllers/rutas.controllers.js";

const server = Router();

server.get("/clientes", getClientes); // 2
server.get("/autosDisponibles", getAutosDisponibles); // 3
server.get("/alquileresClientes", getAlquileresClientes); //4
server.get("/reservasPendientes", getReservasPendientes); // 5
server.get("/alquilerId", getAlquilerId); // 6 - mirar si se puede mejorar
server.get("/cargoEmpleado", getCargoEmpleado); // 7
server.get("/cantidadAutoSucu", getCantidadAutoSucu); // 8
server.get("/costoAlquiler", getCostoAlquiler); // 9 - mirar si se puede mejorar
server.get("/clienteEspecifico", getClienteEspecifico); // 10 - mirar si se puede mejorar
server.get("/autosMayor5", getAutosMayor5); // 11 
server.get("/fechaInicioAlquiler", getFechaInicioAlquiler); // 12
server.get("/reservasPendientesCliente", getReservasPendientesCliente); // 13
server.get("/empleadosEspecificos", getEmpleadosEspecificos); // 14
server.get("/clienteAlmenosUno", getClienteAlmenosUno); // 15
server.get("/autosOrdenados", getAutosOrdenados); // 16
server.get("/cantidadAutoDireccion", getCantidadAutoDireccion); // 17
server.get("/totalAlquileres", getTotalAlquileres); // 18
server.get("/autosMayor5Disponibles", getAutosMayor5Disponibles); // 19
server.get("/jum", getAutosMayor5Disponibles); // 20 - Sale incomplto el ejercicio
server.get("/fechaEntreAlquiler", getFechaEntreAlquiler); // 21

export default server;