import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Explore from './pages/Explore';
import Journal from './pages/Journal';
import { LanguageProvider } from './context/LanguageContext.jsx';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
