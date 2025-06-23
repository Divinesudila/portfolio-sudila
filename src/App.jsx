import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import Vision from './pages/Vision';
import FigmaView from './pages/FigmaView';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/figma" element={<FigmaView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; // ✅ solution
