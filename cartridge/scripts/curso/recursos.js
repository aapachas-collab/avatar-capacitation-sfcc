'use strict';

var Resource = require('dw/web/Resource');

function obtenerSaludo() {
    return Resource.msg('curso.saludo', 'curso', null);
}

function obtenerEtiquetaProducto(cantidad) {
    return cantidad === 1
        ? Resource.msg('curso.inicio.unproducto', 'curso', null)
        : Resource.msg('curso.inicio.variosproductos', 'curso', null);
}

module.exports = {
    obtenerSaludo: obtenerSaludo,
    obtenerEtiquetaProducto: obtenerEtiquetaProducto
};
