db.createColletion("");
db.Clientes.insertMany([
    {
        "nombre": "Juan",
        "apellido": "Pérez",
        "dni": 12345678,
        "email": "juan.perez@email.com",
        "telefono": 5551234
    },
    {
        "nombre": "María",
        "apellido": "García",
        "dni": 12345679,
        "email": "maria.garcia@email.com",
        "telefono": 5551235
    },
    {
        "nombre": "Carlos",
        "apellido": "Rodríguez",
        "dni": 12345680,
        "email": "carlos.rodriguez@email.com",
        "telefono": 5551236
    },
    {
        "nombre": "Ana",
        "apellido": "Fernández",
        "dni": 12345681,
        "email": "ana.fernandez@email.com",
        "telefono": 5551237
    },
    {
        "nombre": "Luis",
        "apellido": "González",
        "dni": 12345682,
        "email": "luis.gonzalez@email.com",
        "telefono": 5551238
    },
    {
        "nombre": "Carmen",
        "apellido": "Martínez",
        "dni": 12345683,
        "email": "carmen.martinez@email.com",
        "telefono": 5551239
    },
    {
        "nombre": "Manuel",
        "apellido": "López",
        "dni": 12345684,
        "email": "manuel.lopez@email.com",
        "telefono": 5551240
    },
    {
        "nombre": "Susana",
        "apellido": "Torres",
        "dni": 12345685,
        "email": "susana.torres@email.com",
        "telefono": 5551241
    },
    {
        "nombre": "Ricardo",
        "apellido": "Mora",
        "dni": 12345686,
        "email": "ricardo.mora@email.com",
        "telefono": 5551242
    },
    {
        "nombre": "Laura",
        "apellido": "Vega",
        "dni": 12345687,
        "email": "laura.vega@email.com",
        "telefono": 5551243
    }
])

db.Autos.insertMany(
    [
        {
            "marca": "Toyota",
            "modelo": "Corolla",
            "anio": 2020,
            "placa": 123456,
            "precio": 20000,
            "capacidad": 5,
            "estado": "disponible",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48")
        },
        {
            "marca": "Honda",
            "modelo": "Civic",
            "anio": 2021,
            "placa": 123457,
            "precio": 21000,
            "capacidad": 5,
            "estado": "no disponible",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48")
        },
        {
            "marca": "Ford",
            "modelo": "Focus",
            "anio": 2019,
            "placa": 123458,
            "precio": 19000,
            "capacidad": 5,
            "estado": "disponible",
            "sucursal": ObjectId("650719b0de2beed4af0d1c49")
        },
        {
            "marca": "Chevrolet",
            "modelo": "Cruze",
            "anio": 2018,
            "placa": 123459,
            "precio": 18000,
            "capacidad": 5,
            "estado": "no disponible",
            "sucursal": ObjectId("650719b0de2beed4af0d1c49")
        },
        {
            "marca": "Mazda",
            "modelo": "3",
            "anio": 2020,
            "placa": 123460,
            "precio": 20500,
            "capacidad": 5,
            "estado": "disponible",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4a")
        },
        {
            "marca": "Nissan",
            "modelo": "Sentra",
            "anio": 2021,
            "placa": 123461,
            "precio": 20050,
            "capacidad": 5,
            "estado": "disponible",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4a")
        },
        {
            "marca": "Hyundai",
            "modelo": "Elantra",
            "anio": 2022,
            "placa": 123462,
            "precio": 21500,
            "capacidad": 4,
            "estado": "no disponible",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b")
        },
        {
            "marca": "Kia",
            "modelo": "Forte",
            "anio": 2021,
            "placa": 123463,
            "precio": 20800,
            "capacidad": 2,
            "estado": "disponible",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b")
        },
        {
            "marca": "Volkswagen",
            "modelo": "Golf",
            "anio": 2019,
            "placa": 123464,
            "precio": 19500,
            "capacidad": 5,
            "estado": "disponible",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b")
        },
        {
            "marca": "Subaru",
            "modelo": "Impreza",
            "anio": 2022,
            "placa": 123465,
            "precio": 22000,
            "capacidad": 4,
            "estado": "no disponible",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b")
        }
    ] 
);

db.Sucursales.insertMany(
    [
        {
            "nombre": "Sucursal Centro",
            "direccion": "Av. Central 123",
            "ciudad": "CiudadA",
            "telefono": 5553456,
            "email": "centro@sucursal.com",
            "gerente": "Carlos Gutiérrez"
        },
        {
            "nombre": "Sucursal Norte",
            "direccion": "Calle Norte 456",
            "ciudad": "CiudadB",
            "telefono": 5553457,
            "email": "norte@sucursal.com",
            "gerente": "Isabel Paredes"
        },
        {
            "nombre": "Sucursal Este",
            "direccion": "Boulevard Este 789",
            "ciudad": "CiudadC",
            "telefono": 5553458,
            "email": "este@sucursal.com",
            "gerente": "Miguel Ortega"
        },
        {
            "nombre": "Sucursal Sur",
            "direccion": "Plaza Sur 101",
            "ciudad": "CiudadD",
            "telefono": 5553459,
            "email": "sur@sucursal.com",
            "gerente": "Lorena Vásquez"
        }
    ]
)

db.Empleados.insertMany(
    [
        {
            "nombre": "Carlos",
            "apellido": "Gutiérrez",
            "dni": 23456789,
            "email": "carlos.gutierrez@email.com",
            "telefono": 5552345,
            "cargo": "Gerente",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "fecha_contratacion": ISODate("2020-01-10"),
            "salario": 3000
        },
        {
            "nombre": "Lorena",
            "apellido": "Vásquez",
            "dni": 23456790,
            "email": "lorena.vasquez@email.com",
            "telefono": 5552346,
            "cargo": "Gerente",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b"),
            "fecha_contratacion": ISODate("2021-03-15"),
            "salario": 1500
        },
        {
            "nombre": "Miguel",
            "apellido": "Ortega",
            "dni": 23456791,
            "email": "miguel.ortega@email.com",
            "telefono": 5552347,
            "cargo": "Técnico",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "fecha_contratacion": ISODate("2019-10-05"),
            "salario": 2000
        },
        {
            "nombre": "Isabel",
            "apellido": "Paredes",
            "dni": 23456792,
            "email": "isabel.paredes@email.com",
            "telefono": 5552348,
            "cargo": "Gerente",
            "sucursal": ObjectId("650719b0de2beed4af0d1c49"),
            "fecha_contratacion": ISODate("2018-06-20"),
            "salario": 3100
        },
        {
            "nombre": "Juanito",
            "apellido": "Paredes",
            "dni": 23456742,
            "email": "juanito.paredes@email.com",
            "telefono": 5552348,
            "cargo": "Vendedor",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "fecha_contratacion": ISODate("2018-06-20"),
            "salario": 3100
        },
        {
            "nombre": "Mariana",
            "apellido": "Paredes",
            "dni": 13456792,
            "email": "mariana.paredes@email.com",
            "telefono": 5552348,
            "cargo": "Vendedor",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "fecha_contratacion": ISODate("2018-06-20"),
            "salario": 3100
        },
        {
            "nombre": "Paco",
            "apellido": "Ger",
            "dni": 23456791,
            "email": "paco.ger@email.com",
            "telefono": 5552348,
            "cargo": "Vendedor",
            "sucursal": ObjectId("650719b0de2beed4af0d1c49"),
            "fecha_contratacion": ISODate("2018-06-20"),
            "salario": 3100
        }
    ]
)

db.Reservas.insertMany(
    [
        {
            "id_cliente": ObjectId("6506fadbde2beed4af0d1c34"),
            "auto": ObjectId("6506fc71de2beed4af0d1c43"),
            "fecha_inicio_reserva": "2023-06-01",
            "fecha_fin_reserva": "2023-06-07",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "estado": "pendiente"
        },
        {
            "id_cliente": ObjectId("6506fadbde2beed4af0d1c35"),
            "auto": ObjectId("6506fc71de2beed4af0d1c3f"),
            "fecha_inicio_reserva": "2023-06-05",
            "fecha_fin_reserva": "2023-06-10",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "estado": "confirmada"
        },
        {
            "id_cliente": ObjectId("6506fadbde2beed4af0d1c3a"),
            "auto": ObjectId("6506fc71de2beed4af0d1c40"),
            "fecha_inicio_reserva": "2023-07-10",
            "fecha_fin_reserva": "2023-07-17",
            "sucursal": ObjectId("650719b0de2beed4af0d1c49"),
            "estado": "cancelada"
        },
        {
            "id_cliente": ObjectId("6506fadbde2beed4af0d1c3b"),
            "auto": ObjectId("6506fc71de2beed4af0d1c42"),
            "fecha_inicio_reserva": "2023-07-15",
            "fecha_fin_reserva": "2023-07-20",
            "sucursal": ObjectId("650719b0de2beed4af0d1c49"),
            "estado": "pendiente"
        },
        {
            "id_cliente": ObjectId("6506fadbde2beed4af0d1c3d"),
            "auto": ObjectId("6506fc71de2beed4af0d1c41"),
            "fecha_inicio_reserva": "2023-08-05",
            "fecha_fin_reserva": "2023-08-12",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4a"),
            "estado": "confirmada"
        },
        {
            "id_cliente": ObjectId("6506fadbde2beed4af0d1c37"),
            "auto": ObjectId("6506fc71de2beed4af0d1c3e"),
            "fecha_inicio_reserva": "2023-08-20",
            "fecha_fin_reserva": "2023-08-25",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b"),
            "estado": "pendiente"
        },
        {
            "id_cliente": ObjectId("6506fadbde2beed4af0d1c39"),
            "auto": ObjectId("6506fc71de2beed4af0d1c45"),
            "fecha_inicio_reserva": "2023-09-10",
            "fecha_fin_reserva": "2023-09-17",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b"),
            "estado": "pendiente"
        },
        {
            "id_cliente": ObjectId("6506fadbde2beed4af0d1c3c"),
            "auto": ObjectId("6506fc71de2beed4af0d1c46"),
            "fecha_inicio_reserva": "2023-09-15",
            "fecha_fin_reserva": "2023-09-20",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b"),
            "estado": "confirmada"
        },
        {
            "id_cliente": ObjectId("6506fadbde2beed4af0d1c36"),
            "auto": ObjectId("6506fc71de2beed4af0d1c47"),
            "fecha_inicio_reserva": "2023-10-05",
            "fecha_fin_reserva": "2023-10-12",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4a"),
            "estado": "cancelada"
        },
        {
            "id_cliente": ObjectId("6506fadbde2beed4af0d1c38"),
            "auto": ObjectId("6506fc71de2beed4af0d1c44"),
            "fecha_inicio_reserva": "2023-10-20",
            "fecha_fin_reserva": "2023-10-27",
            "sucursal": ObjectId("650719b0de2beed4af0d1c4a"),
            "estado": "pendiente"
        }
    ]
)

db.Alquileres.insertMany(
    [
        {
            "cliente": ObjectId("6506fadbde2beed4af0d1c34"),
            "auto": ObjectId("6506fc71de2beed4af0d1c43"),
            "fecha_inicio_alquiler": "2023-06-01",
            "fecha_fin_alquiler": "2023-06-07",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "monto": 350,
            "estado": "activo"
        },
        {
            "cliente": ObjectId("6506fadbde2beed4af0d1c35"),
            "auto": ObjectId("6506fc71de2beed4af0d1c3f"),
            "fecha_inicio_alquiler": ISODate("2023-06-05"),
            "fecha_fin_alquiler": "2023-06-10",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "monto": 400,
            "estado": "activo"
        },
        {
            "cliente": ObjectId("6506fadbde2beed4af0d1c3a"),
            "auto": ObjectId("6506fc71de2beed4af0d1c40"),
            "fecha_inicio_alquiler": ISODate("2023-07-10"),
            "fecha_fin_alquiler": ISODate("2023-07-17"),
            "sucursal": ObjectId("650719b0de2beed4af0d1c49"),
            "monto": 380,
            "estado": "inactivo"
        },
        {
            "cliente": ObjectId("6506fadbde2beed4af0d1c3b"),
            "auto": ObjectId("6506fc71de2beed4af0d1c42"),
            "fecha_inicio_alquiler": ISODate("2023-07-15"),
            "fecha_fin_alquiler": ISODate("2023-07-20"),
            "sucursal": ObjectId("650719b0de2beed4af0d1c49"),
            "monto": 340,
            "estado": "activo"
        },
        {
            "cliente": ObjectId("6506fadbde2beed4af0d1c3d"),
            "auto": ObjectId("6506fc71de2beed4af0d1c41"),
            "fecha_inicio_alquiler": ISODate("2023-08-05"),
            "fecha_fin_alquiler": ISODate("2023-08-12"),
            "sucursal": ObjectId("650719b0de2beed4af0d1c4a"),
            "monto": 360,
            "estado": "activo"
        },
        {
            "cliente": ObjectId("6506fadbde2beed4af0d1c37"),
            "auto": ObjectId("6506fc71de2beed4af0d1c3e"),
            "fecha_inicio_alquiler": ISODate("2023-08-20"),
            "fecha_fin_alquiler": ISODate("2023-08-25"),
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b"),
            "monto": 310,
            "estado": "inactivo"
        },
        {
            "cliente": ObjectId("6506fadbde2beed4af0d1c39"),
            "auto": ObjectId("6506fc71de2beed4af0d1c45"),
            "fecha_inicio_alquiler": ISODate("2023-09-10"),
            "fecha_fin_alquiler": ISODate("2023-09-17"),
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b"),
            "monto": 370,
            "estado": "activo"
        },
        {
            "cliente": ObjectId("6506fadbde2beed4af0d1c3c"),
            "auto": ObjectId("6506fc71de2beed4af0d1c46"),
            "fecha_inicio_alquiler": ISODate("2023-09-15"),
            "fecha_fin_alquiler": ISODate("2023-09-20"),
            "sucursal": ObjectId("650719b0de2beed4af0d1c4b"),
            "monto": 340,
            "estado": "activo"
        },
        {
            "cliente": ObjectId("6506fadbde2beed4af0d1c36"),
            "auto": ObjectId("6506fc71de2beed4af0d1c47"),
            "fecha_inicio_alquiler": ISODate("2023-10-05"),
            "fecha_fin_alquiler": ISODate("2023-10-12"),
            "sucursal": ObjectId("650719b0de2beed4af0d1c4a"),
            "monto": 320,
            "estado": "inactivo"
        },
        {
            "cliente": ObjectId("6506fadbde2beed4af0d1c38"),
            "auto": ObjectId("6506fc71de2beed4af0d1c47"),
            "fecha_inicio_alquiler": ISODate("2023-10-20"),
            "fecha_fin_alquiler": ISODate("2023-10-27"),
            "sucursal": ObjectId("650719b0de2beed4af0d1c4a"),
            "monto": 350,
            "estado": "activo"
        }
    ]
)

db.Entregas_devoluciones.insertMany(
    [
        {
            "id_alquiler": ObjectId("65072d74de2beed4af0d1c5d"),
            "auto": ObjectId("6506fc71de2beed4af0d1c43"),
            "fecha": ISODate("2023-06-01"),
            "tipo": "entrega",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "kilometraje": 21000,
            "estado_vehiculo": "bueno",
            "danos": "ninguno",
            "combustible": "lleno",
            "observaciones": "Cliente satisfecho"
        },
        {
            "id_alquiler": ObjectId("65072d74de2beed4af0d1c5d"),
            "auto": ObjectId("6506fc71de2beed4af0d1c43"),
            "fecha": ISODate("2023-06-07"),
            "tipo": "devolucion",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "kilometraje": 21230,
            "estado_vehiculo": "bueno",
            "danos": "ninguno",
            "combustible": "medio",
            "observaciones": "Todo en orden"
        },
        {
            "id_alquiler": ObjectId("65072d74de2beed4af0d1c5e"),
            "auto": ObjectId("6506fc71de2beed4af0d1c3f"),
            "fecha": ISODate("2023-06-05"),
            "tipo": "entrega",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "kilometraje": 15000,
            "estado_vehiculo": "bueno",
            "danos": "ninguno",
            "combustible": "lleno",
            "observaciones": "Cliente puntual"
        },
        {
            "id_alquiler": ObjectId("65072d74de2beed4af0d1c5e"),
            "auto": ObjectId("6506fc71de2beed4af0d1c3f"),
            "fecha": ISODate("2023-06-10"),
            "tipo": "devolucion",
            "sucursal": ObjectId("650719b0de2beed4af0d1c48"),
            "kilometraje": 15120,
            "estado_vehiculo": "bueno",
            "danos": "rayón en puerta derecha",
            "combustible": "cuarto",
            "observaciones": "Cliente notificó sobre el daño"
        },
    ]
    
)
