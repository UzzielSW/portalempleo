import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "preline";
import "./index.css";
import { useEffect } from 'react';

// Pages
import LandingPage from './pages/LandingPage';

import LoginPage from './pages/LoginPage';

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<div className="p-8 text-center text-2xl font-bold">Página de Registro (En Construcción)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
