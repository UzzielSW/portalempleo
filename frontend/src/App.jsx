import { useState, useEffect } from 'react'
import "preline/preline";
import "./index.css";

function App() {
  const [apiStatus, setApiStatus] = useState({ loading: true, data: null, error: null });

  useEffect(() => {
    // Re-configurar Preline cada vez que el componente se monta
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }

    // Probar conexión con la API en el puerto 4007
    fetch('http://localhost:4007/api')
      .then(res => {
        if (!res.ok) throw new Error('Error en la respuesta del servidor');
        return res.json();
      })
      .then(data => {
        setApiStatus({ loading: false, data, error: null });
      })
      .catch(err => {
        console.error("Error fetching API:", err);
        setApiStatus({ loading: false, data: null, error: err.message });
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Encabezado con Preline Style */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Sistena Dual <span className="text-blue-600">Portal Empleo</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Frontend en <span className="font-semibold text-blue-500">React</span> +
            Backend en <span className="font-semibold text-green-500">Express API</span>
          </p>
          <div className="mt-3">
            <span className="py-1 px-3 inline-flex items-center gap-x-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-800/10 dark:text-blue-500">
              <span className="size-2 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
              Usando Preline UI
            </span>
          </div>
        </div>

        {/* Tarjeta de Estado de API */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-4 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Conexión con el Backend</h2>

            {apiStatus.loading && (
              <div className="flex animate-pulse">
                <div className="flex-shrink-0">
                  <span className="size-12 block bg-gray-200 rounded-full"></span>
                </div>
                <div className="ms-4 mt-2 w-full">
                  <h3 className="h-4 bg-gray-200 rounded-full w-40"></h3>
                  <ul className="mt-5 space-y-3">
                    <li className="w-full h-4 bg-gray-200 rounded-full"></li>
                  </ul>
                </div>
              </div>
            )}

            {apiStatus.error && (
              <div className="bg-red-50 border border-red-200 text-sm text-red-800 rounded-lg p-4" role="alert">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  </div>
                  <div className="ms-3">
                    <p className="font-bold">Error conectando con la API (Puerto 4007)</p>
                    <p className="text-sm">Asegúrate de haber ejecutado `npm run start:api` en la carpeta raíz.</p>
                    <p className="mt-2 font-mono text-xs">{apiStatus.error}</p>
                  </div>
                </div>
              </div>
            )}

            {apiStatus.data && (
              <div className="bg-teal-50 border border-teal-200 text-sm text-teal-800 rounded-lg p-4" role="alert">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
                  </div>
                  <div className="ms-3">
                    <p className="font-bold">Backend Conectado Exitosamente</p>
                    <p>{apiStatus.data.message}</p>
                    <p className="mt-1 text-xs opacity-70 border-t border-teal-200 pt-1 uppercase tracking-wider">Versión {apiStatus.data.version}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ejemplo de Componente Preline (Acordeón) */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 md:p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center italic">Prueba de Componente Interactivo (Preline)</h3>
          <div className="hs-accordion-group">
            <div className="hs-accordion active" id="hs-basic-heading-one">
              <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="hs-basic-collapse-one">
                <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                ¿Cómo funciona esta arquitectura paralela?
              </button>
              <div id="hs-basic-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-one">
                <p className="text-gray-800 ps-7">
                  El servidor Express original sigue sirviendo tus vistas Pug en su puerto habitual. Hemos creado un servidor paralelo (`app-api.js`) en el puerto 4007 que solo envía datos. Esta app de React en el puerto 5173 consume esos datos, permitiéndote probar React sin afectar nada de lo anterior.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
