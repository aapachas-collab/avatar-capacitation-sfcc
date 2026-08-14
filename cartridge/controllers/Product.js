'use strict';

var server = require('server');

server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    var viewData = res.getViewData();
    viewData.etiquetaCurso = 'Visto desde el cartridge de practica';
    res.setViewData(viewData);
    next();
});

module.exports = server.exports();
