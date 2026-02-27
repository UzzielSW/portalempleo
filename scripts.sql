-- creacion de paquetes

-- Header
CREATE OR REPLACE
PACKAGE PACK_PORTAL_EMPLEO AS

/* Fecha que se añadio 26-02-2026 */
/* CONSULTAR INFORMACION ESTUDIANTE */
    PROCEDURE CONSULTAR_ESTUDIANTE(
        WCEDULA IN VARCHAR2,
        VAR_RESPONSE OUT VARCHAR2,
        VAR_RESPONSE_MSJ OUT VARCHAR2,
        WCURSOR OUT SYS_REFCURSOR
    );

END PACK_PORTAL_EMPLEO;

--

CREATE OR REPLACE
PACKAGE BODY PACK_PORTAL_EMPLEO AS

/******************************************************************************/
/******************************************************************************/
/* Fecha que se añadio 26-02-2026 */
/* CONSULTAR INFORMACION ESTUDIANTE */
PROCEDURE CONSULTAR_ESTUDIANTE(
    WCEDULA IN VARCHAR2,
    VAR_RESPONSE OUT VARCHAR2,
    VAR_RESPONSE_MSJ OUT VARCHAR2,
    WCURSOR OUT SYS_REFCURSOR
    ) AS
    /* VARIABBLES*/
  BEGIN
    -- TAREA: extraer informacion basica del estudiante

    /* SE CARGAR EL CURSOR CON EL ESTUDIANTE*/
    OPEN WCURSOR FOR
        SELECT ID_ESTUDIANTE, CEDULA, NOMBRES, APELLIDOS, COD_FACULTAD
        FROM SISACAD.ESTUDIANTES
        WHERE CEDULA = WCEDULA;

-- validar si existe, responde 1 si existe, 0 si no existe, ademas del mencaje de respuesta: respondse_msj
    SELECT COUNT(*) INTO filas FROM SISACAD.ESTUDIANTES WHERE CEDULA = WCEDULA;
    IF filas > 0 THEN
        DBMS_OUTPUT.PUT_LINE('Insert correcto: ' || filas || ' fila(s) insertadas.');
        VAR_RESPONSE:= '1';
        VAR_RESPONSE_MSJ:='EXISTE EL ESTUDIANTE';
    ELSE
        DBMS_OUTPUT.PUT_LINE('No se insertó ninguna fila.');
        VAR_RESPONSE:= '0';
        VAR_RESPONSE_MSJ:='NO EXISTE EL ESTUDIANTE';
    END IF;

-- has una excepcion en caso falle enviar valores y un mensaje de aviso

EXCEPTION
    WHEN OTHERS THEN
        VAR_RESPONSE:= '0';
        VAR_RESPONSE_MSJ:= 'ERROR AL CONSULTAR EL ESTUDIANTE';
        DBMS_OUTPUT.PUT_LINE('Error al consultar el estudiante: ' || SQLERRM);

END CONSULTAR_ESTUDIANTE;
/******************************************************************************/
/******************************************************************************/

END PACK_PORTAL_EMPLEO;