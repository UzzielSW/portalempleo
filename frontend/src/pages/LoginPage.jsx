import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased relative">
      <Navbar />

      {/* Decorative background element matching Landing page */}
      <div className="absolute top-20 right-0 w-1/3 h-full bg-slate-50 dark:bg-slate-800/50 -skew-x-12 translate-x-20 z-0 pointer-events-none"></div>

      {/* Main Login Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 relative z-10 w-full animate-[fadeIn_0.5s_ease-out]">
        <LoginForm />
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
