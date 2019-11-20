const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.post('/messege_post', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje enviado')
});
router.get('/messege_get', function (req, res) {
    res.send('Lista de mensajes')
});
router.delete('/messege_get', function (req, res) {
    res.send('mensaje ' + req.body.text + ' elminado perfecto')
});

// app.request('/',function(req,res){
//     res.send('Hola');
// })

app.listen('3000');
console.log('la aplicacion escucha http://localhost:3000');
