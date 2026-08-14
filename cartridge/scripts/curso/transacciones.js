'use strict';

var Transaction = require('dw/system/Transaction');
var ProductMgr = require('dw/catalog/ProductMgr');

function marcarComoDestacado(idProducto) {
    var producto = ProductMgr.getProduct(idProducto);

    if (!producto) {
        return false;
    }

    Transaction.wrap(function () {
        producto.custom.destacadoCurso = true;
    });

    return true;
}

module.exports = {
    marcarComoDestacado: marcarComoDestacado
};
