import './App.css';
import About from './Components/About';
import Example from './Components/Example';
import Contact from './Components/Contact';
import { Routes, Route, Link, NavLink} from 'react-router-dom'


function App() {
  return (
    <div className='App'>
    <div className='menu'>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/example'>Example</NavLink>
      <NavLink to='/contactinfo'>Contact</NavLink>
         </div>

       <Routes>
         <Route path='/about' element={<About />} />
         <Route path='/example' element={<Example />} />
         <Route path='/contactinfo' element={<Contact />} />
       </Routes>

  
    </div>
  );
}

export default App;
