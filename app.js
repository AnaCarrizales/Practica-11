var express = require('express'); //importamos dependencia express
var app = express(); //declaramos una App de express

var port = process.env.PORT || 3000 //setteamos el puerto para que el servidor quede en escucha
app.use('/assets', express.static(__dirname + '/public')); //específica la aplicación de express
app.use('/', function (req, res, next){
    console.log('Request Url: ' + req.url);
    next();
});
//primera ruta (la cual está al nivel de la raíz /), Hello World!
app.get('/', function (req, res){
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
    <body><h1>Hello world!</h1></body></html>`);//Msj que se mostrará
});

//tercera ruta, recibe un parámetro
app.get('/person/:id', function (req, res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

//segunda ruta /api, regresa un objeto JSON
app.get('/api', function (req,res) {
    res.json({firstname: 'John', lastname: 'Doe'});
});
app.listen(port); //levantar el servidor y ponerlo a la escucha