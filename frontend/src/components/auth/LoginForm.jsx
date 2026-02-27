import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[480px] w-full bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700">

      <div className="flex flex-col items-center mb-8">
        <div className="mb-4 bg-white/50 p-3 rounded-2xl shadow-sm border border-slate-100">
          <img
            alt="Logo Universidad de Panamá"
            className="h-20 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLmM3rAcrzlFASYAagbLXgdHHbdh2j5nIBKz-C5QnJjZ6WRXSgZhcIQKlBtyTALykFZvmwn6aQ2b0cdq5UMNqbu6x4d-qOazXlcOjHfDopP0qHn96ueSQLNQP5QkNrwHGVOjbWp-2S-KYUJ606dgS9Sr8-k4oA4sD6n-beew5QiDN8-llbtDO2udssIgqXmnU1cITToC2-B2cxgoZCTVuLepEiGpdDVRXWAoUwknEdv68w0w_mGaLlGHoUAniSmuyWpmVoK2K3JI4"
          />
        </div>
        <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-extrabold leading-tight text-center">
          Portal de Empleo <span className="text-primary dark:text-blue-400">UP</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-3 text-center">
          Inicia sesión en tu cuenta para continuar
        </p>
      </div>

      <form className="space-y-5">

        {/* Cédula/Pasaporte */}
        <div className="flex flex-col gap-2">
          <label className="flex flex-col w-full">
            <p className="text-slate-700 dark:text-slate-200 text-sm font-bold pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-secondary">badge</span>
              Cédula / Pasaporte
            </p>
            <input
              className="w-full rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary/20 border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:border-secondary h-12 px-4 placeholder:text-slate-400 text-sm font-medium transition-all shadow-sm"
              placeholder="Ej. 8-123-4567 o PE-1234"
              required
              type="text"
            />
          </label>
        </div>

        {/* Contraseña */}
        <div className="flex flex-col gap-2">
          <label className="flex flex-col w-full">
            <div className="flex justify-between items-center pb-2">
              <p className="text-slate-700 dark:text-slate-200 text-sm font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary">lock</span>
                Contraseña
              </p>
              <button className="text-secondary hover:text-yellow-600 text-xs font-bold transition-colors" type="button">
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            <input
              className="w-full rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary/20 border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:border-secondary h-12 px-4 placeholder:text-slate-400 text-base font-medium transition-all shadow-sm tracking-widest"
              placeholder="••••••••"
              required
              type="password"
            />
          </label>
        </div>

        <button
          className="w-full university-gradient text-white font-extrabold py-3.5 rounded-xl hover:opacity-90 transition-all mt-4 shadow-lg flex justify-center items-center gap-2"
          type="submit"
        >
          <span className="material-symbols-outlined text-sm">login</span>
          Entrar al Portal
        </button>
      </form>

      <div className="relative my-8">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white dark:bg-slate-800 text-slate-400 font-medium">
            ¿Eres nuevo en la plataforma?
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Link
          to="/registro"
          className="inline-flex items-center justify-center gap-2 text-primary dark:text-blue-400 text-sm font-bold hover:gap-3 transition-all p-3 rounded-xl border border-primary/20 hover:bg-primary/5 dark:hover:bg-primary/10"
        >
          <span className="material-symbols-outlined text-lg">person_add</span>
          Registrarse como Empresa
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

    </div>
  );
};

export default LoginForm;
