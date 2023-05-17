import { Navbar } from './components/navbar/nav.component';
import { Home } from './components/home/home.component';
import { Skills } from './components/skills/skills.component';
import { Portfolio } from './components/portfolio/portfolio.component';
import { Contact } from './components/contact/contact.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='appContainer'>
        <Navbar />
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
