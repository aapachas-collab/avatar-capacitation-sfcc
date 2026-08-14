# plugin_training

Cartridge de practica para el curso de Salesforce B2C Commerce (SFRA). No tiene
relacion con int_ubigeo, es solo para repasar cada seccion con ejemplos chicos.

## Como instalarlo

1. Copiar `plugin_training` a la carpeta de sandboxes, junto a `app_storefront_base`.
2. Subir por WebDAV o con el plugin de VS Code.
3. Business Manager > Administration > Sites > Manage Sites > tu sitio > Settings.
   Cartridge path: `plugin_training:app_storefront_base`.
4. Copiar `dw.json.example` a `dw.json` y poner las credenciales del sandbox.

## Que hay en cada carpeta

- `controllers/Curso.js` - rutas basicas: Home, parametros por querystring,
  middleware chain, ViewData, uso de un modelo.
- `controllers/Product.js` - extiende `Product-Show` de la base con `server.extend`.
- `controllers/CursoAPI.js` - Manager classes, objeto global, Transaction, Resource.
- `controllers/CursoContenido.js` - content asset + slot.
- `controllers/CursoFormulario.js` - Show/Enviar del formulario del curso.
- `models/productoModel.js` - modelo propio simple.
- `models/product.js` - extension del modelo de producto base (`module.superModule`).
- `scripts/helpers/cursoHelpers.js` - funciones reusables (seccion de buenas practicas).
- `scripts/curso/` - un archivo por tema de la Digital Script API.
- `templates/default/curso/` - inicio (expresiones, isif, isloop, isset, isscript,
  isprint), pagina + decorador (isdecorate), etiquetas + tags/saludo.isml (ismodule),
  contenido (content asset/slot), formulario.
- `templates/es/curso/inicio.isml` - override de la plantilla por locale.
- `templates/slots/curso/plantilla.isml` - template de renderizado custom para un slot.
- `forms/default/curso.xml` - definicion de formulario.
- `data/catalogo-curso.xml` - catalogo de ejemplo: categoria, producto simple,
  master + variantes, bundle, set y producto con opciones.

## Lo que no tiene codigo

Las secciones sobre Business Manager (SaaS, POD, Realms, como entrar al sandbox,
Merchant Tools, instalar el SFRA demo, reindex) y las de entorno (GitHub, Postman,
extensiones de navegador) son navegacion y configuracion, no generan archivos.
# avatar-capacitation-sfcc
