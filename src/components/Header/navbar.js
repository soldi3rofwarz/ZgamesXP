import React,{useState} from 'react'
import './navbar.css'
import Logo from './../../assets/logo.png';
import Lottie from 'lottie-react'
import Play from './../../assets/play.json'
import Pause from './../../assets/pause.png'
import SinisterFoto from '../../assets/images/teacher_1.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isActive,setIsActive]=useState(false)


  const showMenu=()=>setIsActive(!isActive)
  console.log(isActive)
  return (
    <header className='navbar-main'>
      <div className='margen'>
          <div className='logo'><img src={Logo} alt='logo'/></div>
          
          <div className='btn'>
            {isActive?<div onClick={showMenu}><Lottie animationData={Play} loop={true} className='play-btn'/></div>
            :<div onClick={showMenu}><img src={Pause} className='pause-btn' alt='Pause'/></div>}
          </div>
          <nav className={isActive?'menu is-active':'menu'}>
            <div className='menu-list'>
            <Link to='/' className='navbar-item'><div  onClick={showMenu}>Inicio</div></Link>
            <Link to='leyendas' className='navbar-item'> <div  onClick={showMenu}>Leyendas</div></Link>
            <Link to='bocetos' className='navbar-item'> <div  onClick={showMenu}>Bocetos</div></Link>
            <Link to='about' className='navbar-item'> <div  onClick={showMenu}>Acerca de</div></Link>
            </div>
            <div className='sinisterFoto'>
              <img src={SinisterFoto} alt='foto'/>
            </div>
          </nav>
        </div>
    </header>
  )
}

export default Navbar