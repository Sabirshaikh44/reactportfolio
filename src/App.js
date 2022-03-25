import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
      <Hero id="creator-name"/>
      <About/>
      <Work/>
      <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
