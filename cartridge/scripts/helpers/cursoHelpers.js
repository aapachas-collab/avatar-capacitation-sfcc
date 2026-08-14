'use strict';

function formatearTitulo(texto) {
    if (!texto) {
        return '';
    }

    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function formatearPrecio(valor, moneda) {
    var simbolo = moneda === 'USD' ? '$' : 'S/';
    return simbolo + ' ' + valor.toFixed(2);
}

function calcularDescuento(precio, porcentaje) {
    var descuento = precio * (porcentaje / 100);
    return precio - descuento;
}

function sumarPrecios(productos) {
    return productos.reduce(function (total, producto) {
        return total + producto.precio;
    }, 0);
}

module.exports = {
    formatearTitulo: formatearTitulo,
    formatearPrecio: formatearPrecio,
    calcularDescuento: calcularDescuento,
    sumarPrecios: sumarPrecios
};
