var mysql = require('mysql');
var fs = require('fs-promise');


var conexion = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'proyectonodejs',
        multipleStatements: true
    });

conexion.connect(function (error) {
    if (error) {

        console.log("Problemas de conexion con mysql");
    }
    else {
        console.log("Se inicio la conexion a mysql");
        crearTablas();


    }
});

async function crearTablas() {
    try {
        var contenido = await fs.readFile("crearBaseDatos.sql");
        var sql = contenido.toString();
        console.log(sql);
        var resultado = conexion.query(sql);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = conexion;