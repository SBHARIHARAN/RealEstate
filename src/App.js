// import logo from './logo.svg';

import './App.css';
import Header from './Components/Header/Header';
import Extra from './Components/Extra/Extra';
import Companies from './Components/Companies/Companies';
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <div>
      <Header/>
      <Extra/>
      </div>

      <Companies/>

      <div id="residencies">
      <Residencies/>
      </div>

      <div id="value">
      <Value/>
      </div>      
      
      <div id="contact">
      <Contact/>
      </div>

      <div id="getStarted">
      <GetStarted/>
      </div>      

      <Footer/>
      
    </div>

  );
}

export default App;
