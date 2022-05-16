// import logo from './logo.svg';
import './App.css';

import Navjs from './components/Divbar.jsx';
import Midlink from './components/Midbar.jsx';
import Sidebtn from './components/Sidebtn.jsx';
function App() {
  let mid = [
    {link: "Services"},
    {link: "Project"},
    {link: "About"},
  ]

  return (
    <div className="App">
      <div className='logo'>
        <Navjs></Navjs>
      </div>
      
      <div className='links'>
        <a href='#'>
        {mid.map((comp)=>(
          <Midlink {...comp}/>
        ))}
        </a>
        
      </div>
      
      <div className='btn'>
      <Sidebtn/>
      </div>
    </div>
  );
}

export default App;
