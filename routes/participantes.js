var express = require('express');
var router = express.Router();
var bd = require('./bd');



router.get('/', function (req, res, next) {
    bd.query('SELECT * FROM Participantes', function(error, participantes) {
        if(error) {
            console.log(error);
        }
        else {
            res.render('participantes/listar', {participantes:participante});
        }
    });
    res.render('participantes/listar');
});

router.get('/borrar/:id', function (req, res, next) {

});

router.get('/editar/:id', function (req, res, next) {

});

router.get('/crear', function (req, res, next) {

});

router.post('/editar', function (req, res, next) {

});

router.post('/crear', function (req, res, next) {

});


module.exports = router;
