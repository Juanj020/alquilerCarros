import express from 'express';
const router = express.Router();
import validateDoc from "../middlewares/validateDoc";
import { postSucursales } from '../controllers/sucursales.contollers.js';


router.post('/sucursales', [
    check('nombre', "El nombre de la sucursal es obligatorio").not().isEmpty(),
    check('direccion', "La dirección de la sucursal es obligatoria").not().isEmpty(),
    check('ciudad', "La ciudad de la sucursal es obligatoria").not().isEmpty(),
    check('telefono', "El número de teléfono es obligatorio").not().isEmpty().isNumeric().withMessage("El teléfono debe ser un número"),
    check('email', "El email es obligatorio").not().isEmpty().isEmail().withMessage("Debe ser un email válido"),
    check('gerente', "El nombre del gerente es obligatorio").not().isEmpty(),
    validateDoc
], postSucursales);