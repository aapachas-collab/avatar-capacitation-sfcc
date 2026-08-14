'use strict';

var ContentMgr = require('dw/content/ContentMgr');

function obtenerContenido(id) {
    var contenido = ContentMgr.getContent(id);

    if (!contenido || !contenido.online) {
        return null;
    }

    return {
        id: contenido.ID,
        nombre: contenido.name,
        cuerpo: contenido.custom.body
    };
}

module.exports = {
    obtenerContenido: obtenerContenido
};
