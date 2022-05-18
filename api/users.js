const db = require('../models');
const { Router } = require('express');// Obtengo solo el metodo Router
const router = Router();

app.get('/', (req, res) => { // req->request->peticion || res-> response ->respuesta
    res.send({ message: 'hello ADSI' });
});

module.exports = router; //se exportae modulo para usarlo