import './App.css';
import Navbar from './components/Header/navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Leyendas from './components/Leyendas/Leyendas'
import Bocetos from './components/bocetos/bocetos'
import About from './components/About/About'


function App() {
  return (
  <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='leyendas' element={<Leyendas/>}/>
      <Route path='bocetos' element={<Bocetos/>}/>
      <Route path='about' element={<About/>}/>
    </Routes>
  </div>
  );
}

export default App;
