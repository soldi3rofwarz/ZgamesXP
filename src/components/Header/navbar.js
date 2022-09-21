import React from 'react'
import './navbar.css'
import Logo from './../../assets/logo.png';
import Lottie from 'lottie-react'
import Play from './../../assets/play.json'
import Pause from './../../assets/pause.png'

const Navbar = () => {

  return (
    <header className='navbar-main'>
      <div className='margen'>
          <div className='logo'><img src={Logo}/></div>

          <div className='btn'>
            <div><Lottie animationData={Play} loop={true} className='play-btn'/></div>
            <div><img src={Pause} className='pause-btn'/></div>
          </div>
          <nav className='menu'>
            <div className='menu-list'>
              <div className='navbar-item'>Inicio</div>
              <div className='navbar-item'>Leyendas</div>
              <div className='navbar-item'>Bocetos</div>
              <div className='navbar-item'>Acerca de</div>
            </div>
          </nav>
          <div className='logo'>Logo2</div>
        </div>
    </header>
  )
}

export default Navbar