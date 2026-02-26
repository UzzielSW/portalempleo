import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-secondary p-1.5 rounded-lg">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <span className="text-xl font-black text-primary dark:text-blue-400 uppercase tracking-tight">Portal UP</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Dirección de Vinculación con la Empresa y Seguimiento al Egresado. Conectando el conocimiento con el mercado laboral panameño.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-extrabold mb-6 text-slate-900 dark:text-white text-xs uppercase tracking-widest border-b border-secondary inline-block pb-1">CANDIDATOS</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-medium">
              <li><Link to="/jobs" className="hover:text-primary transition-colors">Bolsa de Trabajo</Link></li>
              <li><Link to="/career-advice" className="hover:text-primary transition-colors">Orientación Profesional</Link></li>
              <li><Link to="/internships" className="hover:text-primary transition-colors">Prácticas Profesionales</Link></li>
              <li><Link to="/scholarships" className="hover:text-primary transition-colors">Programas de Beca</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold mb-6 text-slate-900 dark:text-white text-xs uppercase tracking-widest border-b border-secondary inline-block pb-1">EMPRESAS</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-medium">
              <li><Link to="/post-job" className="hover:text-primary transition-colors">Publicar Vacantes</Link></li>
              <li><Link to="/partnerships" className="hover:text-primary transition-colors">Convenios UP</Link></li>
              <li><Link to="/legal" className="hover:text-primary transition-colors">Requisitos Legales</Link></li>
              <li><Link to="/job-fairs" className="hover:text-primary transition-colors">Ferias de Empleo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold mb-6 text-slate-900 dark:text-white text-xs uppercase tracking-widest border-b border-secondary inline-block pb-1">INSTITUCIÓN</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-medium">
              <li><Link to="/about" className="hover:text-primary transition-colors">Sobre la UP</Link></li>
              <li><Link to="/faculties" className="hover:text-primary transition-colors">Facultades</Link></li>
              <li><Link to="/campuses" className="hover:text-primary transition-colors">Sedes Regionales</Link></li>
              <li><Link to="/transparency" className="hover:text-primary transition-colors">Transparencia</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400">© 2024 Universidad de Panamá - Portal de Empleo. Hacia la excelencia.</p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400">Desarrollado por</span>
            <span className="font-bold text-[10px] text-primary dark:text-blue-300">Dirección de Informática UP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
