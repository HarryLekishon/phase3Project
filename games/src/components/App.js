import '../App.css';
import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavB from './NavB';
import Landing from './Landing';
import Footer from './Footer';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <NavB/>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='landing' element={<Landing />}/>
      </Routes>

      <Footer/>

      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
