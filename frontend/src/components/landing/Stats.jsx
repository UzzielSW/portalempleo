const Stats = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">

          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl">group</span>
            </div>
            <p className="text-5xl font-black text-slate-900 dark:text-white mb-2">+15,000</p>
            <p className="text-slate-500 font-semibold uppercase text-xs tracking-widest">Estudiantes Activos</p>
          </div>

          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl">corporate_fare</span>
            </div>
            <p className="text-5xl font-black text-slate-900 dark:text-white mb-2">1,200</p>
            <p className="text-slate-500 font-semibold uppercase text-xs tracking-widest">Empresas Aliadas</p>
          </div>

          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl">description</span>
            </div>
            <p className="text-5xl font-black text-slate-900 dark:text-white mb-2">+3,500</p>
            <p className="text-slate-500 font-semibold uppercase text-xs tracking-widest">Vacantes Mensuales</p>
          </div>

          <div className="absolute right-0 -top-4 bg-white rounded-full p-1 border shadow-sm">
            <span className="material-symbols-outlined text-slate-400 text-sm">expand_less</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
