# Portal Empleo UP

Aplicación web institucional de la **Universidad de Panamá** que conecta candidatos (estudiantes/egresados) con empleadores, facilitando la publicación de ofertas laborales, postulaciones y la gestión centralizada del proceso de empleo.

---

## Descripción

Portal Empleo UP es una plataforma **server-side rendering** construida con **Node.js + Express** y plantillas **Pug**. Provee tres paneles diferenciados según el rol del usuario:

| Panel | Funcionalidades principales |
|---|---|
| **Candidato** | Ver perfil, explorar vacantes, ver detalles de ofertas y consultar postulaciones |
| **Empleador** | Gestionar perfil, publicar y administrar vacantes, revisar candidatos |
| **Administrador** | Dashboard general, gestión de convenios y control de usuarios |

La autenticación se realiza mediante **Passport.js** (estrategia local) consultando directamente un procedimiento almacenado Oracle (`PACK_PORTAL_EMPLEO.CONSULTAR_ESTUDIANTE`) que valida la cédula del usuario.

---

## Tecnologías

- **Runtime:** Node.js
- **Framework:** Express 4
- **Motor de vistas:** Pug
- **Autenticación:** Passport.js + passport-local + express-session
- **Base de datos:** Oracle Database (cliente `oracledb` v6 en modo thick)
- **Gestor de procesos:** PM2
- **Otros:** connect-flash, morgan, dotenv, cookie-parser

---

## Estructura del proyecto

```
portalempleo/
├── app.js                  # Punto de entrada principal (Express, middlewares, rutas)
├── bin/
│   └── www                 # Arranque del servidor HTTP
├── config/
│   └── passport.js         # Estrategia de autenticación local con Oracle
├── controllers/
│   └── all_controllers.js  # Controladores de lógica de negocio
├── DB/
│   └── db_access.js        # Configuración de conexiones a Oracle (variables de entorno)
├── middlewares/
│   └── validarSesion.js    # Middleware de protección de rutas autenticadas
├── routes/
│   └── all_router.js       # Definición de todas las rutas de la aplicación web
├── views/                  # Plantillas Pug
│   ├── index.pug
│   ├── login.pug
│   ├── register.pug
│   ├── contact.pug
│   ├── requirements.pug
│   ├── candidate/
│   ├── employer/
│   └── administrator/
├── public/                 # Archivos estáticos (CSS, imágenes)
└── data/
    └── direcciones_panama.json  # Catálogo de direcciones de Panamá (usado en registro)
```

---

## Requisitos previos

- Node.js >= 18
- Oracle Instant Client (modo thick) instalado y configurado en `PATH_CLIENT_ORACLE`
- Acceso a una base de datos Oracle con el esquema del proyecto

---

## Variables de entorno

Crear un archivo `.env` en la raíz con las siguientes variables:

```env
# Puerto del servidor web
PORT=3000

# Conexión base de datos Portal Empleo
USER_PORTAL_EMPLEO=
PASSWORD_PORTAL_EMPLEO=
CONNECTSTRING_PORTAL_EMPLEO=

# Ruta del cliente Oracle (modo thick)
PATH_CLIENT_ORACLE=
```

---

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Desarrollo (con recarga automática)
npm run dev

# Producción
npm start

# Con PM2 (desarrollo)
npm run pm2:start

# Con PM2 (producción)
npm run pm2:start:prod
```

---

## Rutas disponibles

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Página principal |
| GET | `/login` | Formulario de inicio de sesión |
| POST | `/login` | Procesar autenticación |
| GET | `/register` | Formulario de registro |
| GET | `/contact` | Página de contacto |
| GET | `/requirements` | Requisitos para registrarse |
| GET | `/candidate/profile` | Perfil del candidato |
| GET | `/candidate/vacancies` | Listado de vacantes (candidato) |
| GET | `/candidate/vacancies/1` | Detalle de una vacante |
| GET | `/candidate/applications` | Mis postulaciones |
| GET | `/employer/profile` | Perfil del empleador |
| GET | `/employer/vacancies` | Gestión de vacantes |
| GET | `/employer/candidates` | Gestión de candidatos |
| GET | `/administrator/dashboard` | Panel del administrador |
| GET | `/administrator/convenios` | Control de convenios |
| GET | `/administrator/users` | Control de usuarios |

---

## Flujo de autenticación

1. El usuario ingresa su **cédula** y **contraseña** en `/login`.
2. Passport invoca la estrategia local, que ejecuta el procedimiento `PACK_PORTAL_EMPLEO.CONSULTAR_ESTUDIANTE` en Oracle.
3. Si el procedimiento retorna datos, el usuario queda serializado en sesión.
4. Las rutas protegidas utilizan el middleware `validarSesion` para verificar `req.isAuthenticated()`.
5. Si la sesión no es válida, se redirige automáticamente a `/`.
