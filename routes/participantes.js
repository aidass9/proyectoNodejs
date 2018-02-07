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

router.get('/editar/:idParticipante', function (req, res, next) {
    bd.query("SELECT * FROM Participantes WHERE ?", req.params, function (error, participante) {
        if (error) {
            cargarVistaInicio(res, error.message, false);
        }
        else if (participante.length) {
            console.log(participante[0]);
            res.render('participantes/editar', { p: participante[0] });
        }
        else {
            cargarVistaInicio(res, "No existe el participante", false);

        }
    });


});

router.get('/crear', function (req, res, next) {
    res.render('participantes/crear');
});

router.get('/detalle/:idParticipante', function (req, res, next) {
    bd.query("SELECT * FROM Participantes WHERE ?", req.params, function (error, participante) {
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

router.post('/editar/:idParticipante', function (req, res, next) {

    bd.query('UPDATE Participantes SET ? WHERE ?', [req.body, { idParticipante: req.params.idParticipante }], function (error, resultado) {
        if (error) {
            bd.query("SELECT * FROM Participantes WHERE ?", req.params, function (error2, participante) {
                if (error2) {
                    cargarVistaInicio(res, error2.message, false);
                }
                else if (participante.length) {
                    console.log(participante[0]);
                    res.render('participantes/editar', { p: participante[0], mensaje: error.message });
                }
                else {
                    cargarVistaInicio(res, "No existe el participante", false);
        
                }
            });
        }
        else {
            cargarVistaInicio(res, 'Participante editado con éxito', true);
        }
    });
});

router.post('/crear', function (req, res, next) {

    bd.query("INSERT INTO Participantes SET ?", req.body, function (error, resultado) {
        if (error) {
            res.render('participantes/crear', { mensaje: error.message });
        }
        else {
            cargarVistaInicio(res, 'Participante creado con éxito', true);
        }
    });

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
