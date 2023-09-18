import Sucursales from "../models/Sucursales";

const postSucursales = async (req, res) => {
    try {
        const { nombre, direccion, ciudad, telefono, email, gerente } = req.body;
        const sucursal = new Sucursales({nombre, direccion, ciudad, telefono, email, gerente});

        const existeNombre = await Sucursales.findOne({nombre});
        if(existeNombre){
            return res.status(400).json({msg:"El nombre de la sucursal ya está registrado"})
        }

        await sucursal.save();
        res.json(sucursal);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al intentar registrar la sucursal');
    }
}

export {postSucursales};