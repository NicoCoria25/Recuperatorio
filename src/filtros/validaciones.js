const filtros = [
    {
        validacion: "Si el stock es mayor que el valor recibido",
        fn:(stock, value) => {return stock > value}

    },
    {
        validacion: "Si el precio es menor o igual al valor recibido",
        fn: (precio, value) => {return precio <= value}

    },
    {
        validacion: "Si el nombre contiene menos de X caracteres",
        fn: (nombre, MaxCaracteres) => {return nombre.length < MaxCaracteres}

    },
    {
        validacion: "Si la categoría está en un array de categorías permitidas",
        fn: (categoría) => {const permitidas = ["electrodomestico", "deportivo"];
        return permitidas.includes(categoría)
        }

    }
]

module.exports = filtros;