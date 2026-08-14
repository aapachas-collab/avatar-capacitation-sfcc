'use strict';

var base = module.superModule;

var product = base;

Object.defineProperty(product.prototype, 'etiquetaCurso', {
    get: function () {
        return this.raw.custom.etiquetaCurso || 'sin etiqueta';
    }
});

module.exports = product;
