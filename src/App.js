import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects'
import Contact from './Pages/Contact/Contact';
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
