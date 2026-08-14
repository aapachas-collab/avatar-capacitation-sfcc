'use strict';

var server = require('server');
var managers = require('*/cartridge/scripts/curso/managers');
var globalObject = require('*/cartridge/scripts/curso/globalObject');
var transacciones = require('*/cartridge/scripts/curso/transacciones');
var recursos = require('*/cartridge/scripts/curso/recursos');

server.get('Managers', function (req, res, next) {
    res.json({
        sitio: managers.obtenerInfoSitio(),
        catalogoRaiz: managers.obtenerCatalogoRaiz(),
        producto: managers.obtenerProducto(req.querystring.id)
    });
    next();
});

server.get('GlobalObject', function (req, res, next) {
    globalObject.guardarPreferencia('idiomaCurso', req.querystring.idioma);

    res.json(globalObject.leerContextoActual());
    next();
});

server.get('Transaccion', function (req, res, next) {
    var actualizado = transacciones.marcarComoDestacado(req.querystring.id);

    res.json({ actualizado: actualizado });
    next();
});

server.get('Recursos', function (req, res, next) {
    res.json({
        saludo: recursos.obtenerSaludo(),
        etiqueta: recursos.obtenerEtiquetaProducto(Number(req.querystring.cantidad) || 1)
    });
    next();
});

module.exports = server.exports();
