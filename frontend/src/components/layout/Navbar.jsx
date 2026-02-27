import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Comprobar la preferencia del usuario al cargar
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary text-secondary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-primary dark:text-blue-400">
                Portal de Empleo UP
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                Universidad de Panamá
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-semibold hover:text-secondary transition-colors">
              INICIO
            </Link>
            <Link to="/requirements" className="text-sm font-semibold hover:text-secondary transition-colors">
              REQUISITOS PARA REGISTRARSE
            </Link>
            <Link to="/contact" className="text-sm font-semibold hover:text-secondary transition-colors">
              CONTÁCTENOS
            </Link>

            {/* Selector de Tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
              aria-label="Alternar tema oscuro"
            >
              <span className="material-symbols-outlined text-xl">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-700">
              <Link to="/login" className="text-sm font-bold text-primary dark:text-blue-400">
                Iniciar Sesión
              </Link>
              <Link
                to="/registro"
                className="bg-primary hover:bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md"
              >
                Registrarse
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button - Placeholder for Future */}
          <div className="md:hidden flex items-center">
            <button className="text-primary hover:text-secondary focus:outline-none">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
