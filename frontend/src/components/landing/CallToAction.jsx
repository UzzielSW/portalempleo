import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto university-gradient rounded-[2rem] overflow-hidden relative shadow-2xl">
        <div className="relative z-10 p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">¿Quieres reclutar personal?</h2>
            <p className="text-blue-100 text-lg mb-8 opacity-90">
              Accede al talento formado en la universidad más prestigiosa del país. Publica tus ofertas de forma gratuita y encuentra el perfil ideal.
            </p>
            <Link
              to="/requirements"
              className="inline-flex items-center gap-3 bg-[#B8860B] hover:bg-yellow-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg"
            >
              Ver Requisitos de Empresa
              <span className="material-symbols-outlined text-lg">person_add</span>
            </Link>
          </div>

          <div className="hidden lg:flex gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
              <span className="material-symbols-outlined text-white text-3xl">person_search</span>
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
              <span className="material-symbols-outlined text-white text-3xl">verified</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
