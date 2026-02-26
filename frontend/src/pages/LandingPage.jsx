import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/landing/Hero';
import Stats from '../components/landing/Stats';
import CallToAction from '../components/landing/CallToAction';
import Steps from '../components/landing/Steps';
import Roles from '../components/landing/Roles';
import Partners from '../components/landing/Partners';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Stats />
        <CallToAction />
        <Steps />
        <Roles />
        <Partners />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
