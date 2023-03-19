import './App.css';
import HeroBox from './Components/HeroBox';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBox />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
