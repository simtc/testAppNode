const express = require('express');//framework de node
const app = express();//Instancia de la clase express
const bodyParser = require('body-parser');//Capturar datos del lado del frontend
const morgan = require('morgan');//Informacion peticion servidor

app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));//Recibir datos principales desde el formulario
app.use(morgan('dev'));//Info de la peticion HTTP al servidor
app.use(bodyParser.json());//Acepta formato json
//app.use(morgan('combined'));

//router
app.use('/api/users', require('./api/users'));

app.get('/', (req, res) => { // req->request->peticion || res-> response ->respuesta
    res.send({ message: 'hello ADSI' });
});

app.listen(app.get('port'), () => console.log(`server runnin on port ${app.get('port')}`));//Iniciando servidor
