import { Link } from 'react-router-dom';

const Roles = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Empleador Card */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-800 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 border border-slate-100 dark:border-slate-700 shadow-xl">
          <div className="flex-1 text-center md:text-left z-10">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">
              SECCIÓN EMPRESAS
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
              Empleador
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed">
              Publique sus vacantes y acceda al banco de talentos más calificado de la región.
            </p>
            <Link
              to="/requirements"
              className="bg-[#003876] text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-all inline-block shadow-md"
            >
              Ver Requisitos
            </Link>
          </div>
          <div className="w-48 h-48 bg-[#2d7a78] rounded-2xl flex items-center justify-center p-6 relative">
            <div className="bg-white/10 w-full h-full rounded-lg border border-white/20 flex flex-col items-center justify-center gap-4">
              <span className="material-symbols-outlined text-white text-3xl">work</span>
              <span className="material-symbols-outlined text-white text-3xl">handshake</span>
            </div>
          </div>
        </div>

        {/* Candidato Card */}
        <div className="relative overflow-hidden bg-[#002147] rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="flex-1 text-center md:text-left z-10">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">
              TALENTO UP
            </span>
            <h3 className="text-3xl font-extrabold text-white mb-4">
              Candidato
            </h3>
            <p className="text-blue-100 mb-8 text-sm leading-relaxed">
              Gestione su carrera profesional y encuentre pasantías o empleos permanentes.
            </p>
            <Link
              to="/login"
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-all inline-block shadow-md"
            >
              Iniciar Sesión
            </Link>
          </div>
          <img
            alt="Candidate"
            className="w-48 h-48 rounded-2xl object-cover shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjS6j-PkeF7303KJupK1AlxliKyZ19DsteryuFDakgN6G28Es3B_kS0t4xz-uZ8aRE-wiz5e3SNyL5mYvN1S7Mrd_Enp0dbOI2d8uXxPcth-3Tesh0QsF3GZsrD2PCvju7dXXBRwrn3PbMV76OGYyiJmMjhljn_6Q8bIjk-_3rBePrXDflJOqo-JlqvTCvDEjQPE2KZHgiEJNiKsX88HzCu4xgnQzPXlIdtmuVg7rXUNPxfV2j5taPkZhzKpuBH17SQ28WkefvCFo"
          />
        </div>

      </div>
    </section>
  );
};

export default Roles;
