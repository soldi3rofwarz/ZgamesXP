import React from 'react'
import './navbar.css'
import Logo from './../../Assets/logo.png';

const Navbar = () => {
  return (
    <header className='navbar-main'>
      <div className='margen'>
          <div className='logo'><img src={Logo}/></div>
          <nav className='navbar'>
              <div className='navbar-item'>Inicio</div>
              <div className='navbar-item'>Leyendas</div>
              <div className='navbar-item'>Bocetos</div>
              <div className='navbar-item'>Acerca de</div>
          </nav>
          <div className='logo'>Logo2</div>
        </div>
    </header>
  )
}

export default Navbar