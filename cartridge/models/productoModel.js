'use strict';

function ProductoModel(datos) {
    this.id = datos.id;
    this.nombre = datos.nombre;
    this.precio = datos.precio;
    this.disponible = datos.stock > 0;
}

module.exports = ProductoModel;
