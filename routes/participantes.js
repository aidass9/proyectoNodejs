var express = require('express');
var router = express.Router();
var bd = require('./bd');



router.get('/', function (req, res, next) {
    cargarVistaInicio(res);
});

router.get('/borrar/:id', function (req, res, next) {
    var sql = 'DELETE FROM Participantes WHERE idParticipante = ' + req.params.id;
    bd.query(sql, function (error, resultado) {
        if (error) {
            cargarVistaInicio(res, error.message, false);
        }
        else {
            cargarVistaInicio(res, "Participante borrado correctamente", true);
        }
    });
});

router.get('/editar/:id', function (req, res, next) {

});

router.get('/crear', function (req, res, next) {

});

router.get('/detalle/:id', function (req, res, next) {
    bd.query("SELECT * FROM Participantes WHERE idParticipantes = ?", req.params, function (error, participante) {
        if (error) {
            cargarVistaInicio(res, error.message, false);
        }
        else if (participante.length) {
            res.render('participantes/detalle', { participante: participante[0] });
        }
        else {
            cargarVistaInicio(res, "No existe el participante", false);
        }
    });
});

router.post('/editar', function (req, res, next) {

});

router.post('/crear', function (req, res, next) {

});

function cargarVistaInicio(res, mensaje, correcto) {
    bd.query('SELECT * FROM participantes', function (error, participantes) {
        if (error) {
            console.log(error);
        }
        else {
            res.render('participantes/listar', { participantes: participantes, mensaje: mensaje, correcto: correcto });
        }

    });
}

module.exports = router;
