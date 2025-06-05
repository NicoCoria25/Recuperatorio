const express = require("express");
const app = express();
const productos = require('/data/productos.json');
const validaciones = require('/filtros/validaciones.js');
const port = 3000;

app.use(express.json());

app.post("/productos/filtrar", (req, res) =>{
    const reglas = req.body;
    if(!Array.itsArray(reglas)){
        return res.status(400).json({error: "El body tiene que ser un array de validaciones"})
    }
    const filtrados = productos.filter(producto => reglas.every(regla => {
        const fn = validaciones[reglas.fn];
        if(!fn) return false
        return fn(producto, regla.values);
    })
);
res.json(filtrados);
});

app.listen(port, () => {
    console.log("Servidor iniciando en el PORT ", port)
})