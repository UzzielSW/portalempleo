import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Navegar a los resultados de búsqueda o hacer el fetch a la API
    // navigate('/jobs?q=...');
    console.log("Buscar empleo...");
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-white dark:bg-slate-900">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-slate-800/50 -skew-x-12 translate-x-20 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              VINCULACIÓN UNIVERSITARIA & TALENTO
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Impulsa tu Futuro <br /><span className="text-primary dark:text-blue-400">Profesional</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              Conectamos a estudiantes y egresados de la Universidad de Panamá con las empresas más importantes del país y el mundo.
            </p>

            <form onSubmit={handleSearch} className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row gap-2 max-w-2xl">
              <div className="flex-1 flex items-center px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <span className="material-symbols-outlined text-slate-400 mr-2">search</span>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full text-sm outline-none dark:text-white"
                  placeholder="Cargo, profesión"
                  type="text"
                />
              </div>

              <div className="flex-1 flex items-center px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <span className="material-symbols-outlined text-slate-400 mr-2">location_on</span>
                <select className="bg-transparent border-none focus:ring-0 w-full text-sm outline-none dark:text-white">
                  <option>Sede Central</option>
                  <option>Centros Regionales</option>
                  <option>Remoto</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-[#B8860B] hover:bg-yellow-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Buscar</span>
                <span className="material-symbols-outlined text-sm">logout</span> {/* Ojo, el icono original era 'logout', tal vez debería ser 'search'? */}
              </button>
            </form>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              alt="Estudiante UP"
              className="relative z-10 rounded-3xl shadow-2xl border-8 border-white dark:border-slate-800 w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1iVrlw5nwDO980wQpB_o30VNg8niQUkl30NIs3mzgyzmAm38wx9MWsdfB1rGr-UrP7MIgRsht2q8TyDN8H9ghBM9AgKE94eoc0lies9-4-Upxpdy4OXO-1Hb_3ge5NckfQkZgOwslfqmHcyrzYsBv4yGu1m415PrvZm5TOIxEHEVzxDGYGzSq8hyjrfOvYP4swO0buvDnjJQf0x-SCFJBF5RX_NQG2KDWyEjlfMDKyUu4EsOzKduyhAaVW4pn3z_TKGMwAYvVsjc"
            />

            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-3xl font-bold">trending_up</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">EMPLEABILIDAD</p>
                  <p className="text-lg font-black text-slate-800 dark:text-white">92% Éxito</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
