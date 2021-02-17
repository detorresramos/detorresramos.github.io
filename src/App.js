import './App.css';
import Home from "./Components/Home"
import NavBar from "./Components/Navbar"
import { BrowserRouter as Router } from 'react-router-dom'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </Router>
  );
}

export default App;
