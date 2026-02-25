// app.js - Configuracion basica de Express con Pug + Preline

const express = require('express');
const path = require('path');
const app = express();

// Motor de vistas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta landing page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Portal de Empleo UP corriendo en http://localhost:3000');
});

// ============================================================
// ESTRUCTURA DE CARPETAS RECOMENDADA
// ============================================================
//
// proyecto/
// |-- views/
// |   |-- index.pug            <- landing page (el archivo entregado)
// |   |-- layouts/
// |   |   |-- main.pug         <- layout base (nav + footer compartido)
// |   |-- pages/
// |       |-- login.pug
// |       |-- requisitos.pug
// |       |-- contacto.pug
// |       |-- registro.pug
// |
// |-- public/
// |   |-- css/
// |   |   |-- style.css        <- puedes mover los estilos aqui
// |   |-- js/
// |   |   |-- preline.js       <- CDN o npm: preline
// |   |-- img/
// |       |-- logo-up.png
// |
// |-- app.js
// |-- package.json
//
// ============================================================
// DEPENDENCIAS npm NECESARIAS
// ============================================================
//
// npm install express pug
// npm install --save-dev nodemon
//
// Para Preline UI, agregar en el pug:
// script(src='https://cdn.jsdelivr.net/npm/preline/dist/preline.js')
// O instalar: npm install preline
// Y en el pug: script(src='/js/preline.js')
//
// ============================================================
// NOTA SOBRE PRELINE EN PUG
// ============================================================
//
// Preline usa atributos data-hs-* para sus componentes.
// En Pug se escriben igual:
//
// button(
//   type='button'
//   data-hs-overlay='#modal-id'
// ) Abrir Modal
//
// div#modal-id.hs-overlay.hidden(
//   data-hs-overlay-backdrop-container='body'
//   role='dialog'
//   tabindex='-1'
// )
//   .hs-overlay-open:mt-7.hs-overlay-open:opacity-100.hs-overlay-open:duration-500.mt-0.opacity-0.ease-out.transition-all.sm:max-w-lg.sm:w-full.m-3.sm:mx-auto
//     .flex.flex-col.bg-white.border.shadow-sm.rounded-xl
//       // contenido modal
