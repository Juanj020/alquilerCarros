import {Schema, model, Types} from "mongoose";

const entregaDevolucionSchema = new Schema({
    id_alquiler: {
        type: Schema.Types.ObjectId,
        ref: 'Alquileres',  
        required: true
    },
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Autos', 
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    tipo: {
        type: String,
        enum: ['entrega', 'devolucion'],
        required: true
    },
    sucursal: {
        type: Schema.Types.ObjectId,
        ref: 'Sucursales',
        required: true
    },
    kilometraje: {
        type: Number,
        required: true
    },
    estado_vehiculo: {
        type: String,
        required: true
    },
    danos: {
        type: String,
        default: 'ninguno'
    },
    combustible: {
        type: String,
        required: true
    },
    observaciones: {
        type: String
    }
});

const entregaDevoluciones = model('entregaDevoluciones',entregaDevolucionSchema,'entregaDevoluciones');
export default entregaDevoluciones;