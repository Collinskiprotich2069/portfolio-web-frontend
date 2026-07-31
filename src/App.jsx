import Projects from './components/Projects';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import './styles/Header.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="header-section">
        <p>
          <Link to="/">Home</Link>
        </p>
        <li className="header-elements">
          <ul><Link to="/about">About/Skills</Link></ul>
          <ul><Link to="/projects">Projects</Link></ul>
          <ul><Link to="/contact">Contact</Link></ul>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
