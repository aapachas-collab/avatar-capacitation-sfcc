'use strict';

var server = require('server');
var cursoHelpers = require('*/cartridge/scripts/helpers/cursoHelpers');
var ProductoModel = require('*/cartridge/models/productoModel');

server.get('Home', function (req, res, next) {
    var productos = [
        { nombre: 'Audifono Basico', precio: 49.9 },
        { nombre: 'Audifono Bluetooth', precio: 129.9 },
        { nombre: 'Combo de Audio', precio: 159.9 }
    ];

    res.render('curso/inicio', {
        titulo: 'Curso SFRA',
        fecha: new Date(),
        productos: productos,
        total: cursoHelpers.sumarPrecios(productos)
    });
    next();
});

server.get(
    'Saludo',
    function (req, res, next) {
        var visitas = (req.session.raw.custom.visitasCurso || 0) + 1;
        req.session.raw.custom.visitasCurso = visitas;
        res.setViewData({ visitas: visitas });
        next();
    },
    function (req, res, next) {
        var nombre = req.querystring.nombre || 'invitado';
        var viewData = res.getViewData();

        res.json({
            mensaje: 'Hola, ' + nombre,
            visitas: viewData.visitas
        });
        next();
    }
);

server.get('Pagina', function (req, res, next) {
    res.render('curso/pagina', {
        titulo: 'Pagina con layout'
    });
    next();
});

server.get('Etiquetas', function (req, res, next) {
    res.render('curso/etiquetas');
    next();
});

server.get('Modelo', function (req, res, next) {
    var producto = new ProductoModel({
        id: 'curso-audifono-master',
        nombre: 'Audifono Bluetooth',
        precio: 129.9,
        stock: 12
    });

    res.render('curso/inicio', {
        titulo: cursoHelpers.formatearTitulo(producto.nombre),
        fecha: new Date(),
        productos: [producto],
        total: producto.precio
    });
    next();
});

module.exports = server.exports();
