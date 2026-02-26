const Steps = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-[#1a1a1a] dark:text-white">Tu camino al éxito profesional</h2>
          <p className="text-slate-500">Sigue estos 3 simples pasos para encontrar tu próxima gran oportunidad laboral como parte de la comunidad UP.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          <div className="relative p-8 text-center group">
            <div className="mb-6 w-12 h-12 bg-[#003876] text-white rounded-full flex items-center justify-center font-black text-xl mx-auto">1</div>
            <h3 className="text-xl font-bold mb-4">Crea tu Perfil</h3>
            <p className="text-slate-500 text-sm">Regístrate con tu correo institucional o personal y completa tu trayectoria académica.</p>
          </div>

          <div className="relative p-8 text-center group">
            <div className="mb-6 w-12 h-12 bg-[#003876] text-white rounded-full flex items-center justify-center font-black text-xl mx-auto">2</div>
            <h3 className="text-xl font-bold mb-4">Postula a Ofertas</h3>
            <p className="text-slate-500 text-sm">Explora vacantes exclusivas para egresados y estudiantes UP según tu facultad.</p>
          </div>

          <div className="relative p-8 text-center group">
            <div className="mb-6 w-12 h-12 bg-[#003876] text-white rounded-full flex items-center justify-center font-black text-xl mx-auto">3</div>
            <h3 className="text-xl font-bold mb-4">Obtén el Empleo</h3>
            <p className="text-slate-500 text-sm">Participa en entrevistas y procesos de selección con empresas de alto nivel.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Steps;
