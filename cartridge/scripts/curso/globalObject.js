'use strict';

function leerContextoActual() {
    return {
        localeActual: request.locale,
        clienteAutenticado: !empty(customer) && customer.authenticated,
        idiomaGuardado: session.custom.idiomaCurso || null
    };
}

function guardarPreferencia(clave, valor) {
    if (empty(valor)) {
        return false;
    }

    session.custom[clave] = valor;
    return true;
}

module.exports = {
    leerContextoActual: leerContextoActual,
    guardarPreferencia: guardarPreferencia
};
