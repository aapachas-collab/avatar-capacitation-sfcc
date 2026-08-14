'use strict';

var ProductMgr = require('dw/catalog/ProductMgr');
var CatalogMgr = require('dw/catalog/CatalogMgr');
var Site = require('dw/system/Site');

function obtenerInfoSitio() {
    var site = Site.getCurrent();

    return {
        nombreSitio: site.getName(),
        idSitio: site.getID(),
        monedaDefault: site.getDefaultCurrency()
    };
}

function obtenerProducto(id) {
    var producto = ProductMgr.getProduct(id);

    if (!producto) {
        return null;
    }

    return {
        id: producto.ID,
        nombre: producto.name,
        online: producto.online
    };
}

function obtenerCatalogoRaiz() {
    var catalogo = CatalogMgr.getSiteCatalog();
    var raiz = catalogo.getRoot();

    return {
        id: raiz.ID,
        nombre: raiz.displayName
    };
}

module.exports = {
    obtenerInfoSitio: obtenerInfoSitio,
    obtenerProducto: obtenerProducto,
    obtenerCatalogoRaiz: obtenerCatalogoRaiz
};
