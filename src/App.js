import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/about';
import background from './res/background';
import Gallery from './components/Gallery/gallery';

function App() {
  return (
    <div className="landing-page">e
      <img className="bg-about" src={background} alt="background"/>
      <Header />
      <Home />
      <About />
      <Gallery />

      
      <div style={{backgroundColor: "blue", height: "100vh", zIndex: "1"}}>
        sas
      </div>
      <div style={{backgroundColor: "coral", height: "100vh", zIndex: "1"}}>
        sas
      </div>
    </div>
  );
}

export default App;
