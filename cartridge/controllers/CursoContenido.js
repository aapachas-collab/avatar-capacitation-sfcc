'use strict';

var server = require('server');
var contenidoHelpers = require('*/cartridge/scripts/curso/contenido');

server.get('Show', function (req, res, next) {
    res.render('curso/contenido', {
        contenido: contenidoHelpers.obtenerContenido('curso-banner')
    });
    next();
});

module.exports = server.exports();
