'use strict';

var server = require('server');

server.get('Show', function (req, res, next) {
    res.render('curso/formulario', {
        curso: server.forms.getForm('curso')
    });
    next();
});

server.post('Enviar', function (req, res, next) {
    var cursoForm = server.forms.getForm('curso');

    if (cursoForm.valid) {
        res.json({
            success: true,
            mensaje: 'Formulario recibido correctamente'
        });
    } else {
        res.json({
            success: false,
            fields: {
                nombre: cursoForm.nombre.error,
                correo: cursoForm.correo.error
            }
        });
    }

    next();
});

module.exports = server.exports();
