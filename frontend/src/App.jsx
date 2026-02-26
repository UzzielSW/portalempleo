import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "preline/preline";
import "./index.css";
import { useEffect } from 'react';

// Pages
import LandingPage from './pages/LandingPage';

function App() {
  useEffect(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Futuras rutas para login y registro */}
        <Route path="/login" element={<div className="p-8 text-center text-2xl font-bold">Página de Login (En Construcción)</div>} />
        <Route path="/registro" element={<div className="p-8 text-center text-2xl font-bold">Página de Registro (En Construcción)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
