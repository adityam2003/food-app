import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Quote from './components/quote';
import Chef from './components/chef';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container main'>
        <Hero />
        <Skills/>
        <Quote/>
        <Chef/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
