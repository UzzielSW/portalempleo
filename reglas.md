## Reglas Universales
- Inglés siempre: El código es internacional. Escribe UserProfile.js, no PerfilUsuario.js.
- Sin espacios: Jamás uses espacios. Los sistemas de archivos y las URLs los odian (terminarás con %20 por todos lados).
- Cuidado con el Case-Sensitivity:
    - Windows y macOS son "case-insensitive" (no distinguen mayúsculas de minúsculas al leer).
    - Linux (donde correrá tu servidor) es "case-sensitive".
- Error clásico: Importar ./User.js cuando el archivo se llama ./user.js. En tu Mac funciona, en producción (Docker/Linux) el servidor se cae.

## Forma de nombrar los archivos

- Si exportas una clase: PascalCase (UserModel.js).
- Si exportas funciones o instancias: kebab-case (user-routes.js) es más seguro para evitar problemas de mayúsculas en Linux.

## Archivos Públicos y Assets (Imágenes, CSS, JS compilado)
Esto es crítico para el SEO y la infraestructura web. Usa siempre kebab-case (minúsculas y guiones medios).

- ✅ company-logo-v2.png, main-style.css.
- ❌ CompanyLogo.png, main_style.css.
- Por qué: Las URLs son case-sensitive en muchos servidores. Google prefiere guiones (-) como separadores de palabras en lugar de guiones bajos (_).

## CSS

- Para propiedades CSS ordernar lo de forma ascendente por el nombre de la propiedad.
- Para propiedades o nombre de variables ordenarlo de forma ascendente

## Los comandos que se deban ejecutar mencionalos para yo ejecutarlos, luego yo te confirmo que todo se haya ejecutado correctamente y tu procedes con las tareas que debes hacer.


## Tener en cuenta los problemas listados por OWASP:
• LDAP injection
• SQL injection
• Cross-Site Scripting (XSS)
• Cross-Site Request Forgery (CSRF)
• Broken Authentication and Session Management
• Insecure Direct Object References
• Security Misconfiguration
• Sensitive Data Exposure
• Insufficient Attack Protection
• Insufficient Logging & Monitoring
• Insufficient Transport Layer Protection
• Insufficient File Path Protection