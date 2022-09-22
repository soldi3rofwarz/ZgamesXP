import React,{useState} from 'react'
import './navbar.css'
import Logo from './../../assets/logo.png';
import Lottie from 'lottie-react'
import Play from './../../assets/play.json'
import Pause from './../../assets/pause.png'
import SinisterFoto from '../../assets/images/teacher_1.jpg'

const Navbar = () => {
  const [isActive,setIsActive]=useState(false)


  const showMenu=()=>setIsActive(!isActive)
  console.log(isActive)
  return (
    <header className='navbar-main'>
      <div className='margen'>
          <div className='logo'><img src={Logo}/></div>
          
          <div className='btn'>
            {isActive?<div onClick={showMenu}><Lottie animationData={Play} loop={true} className='play-btn'/></div>
            :<div onClick={showMenu}><img src={Pause} className='pause-btn'/></div>}
          </div>
          <nav className={isActive?'menu is-active':'menu'}>
            <div className='menu-list'>
              <div className='navbar-item'>Inicio</div>
              <div className='navbar-item'>Leyendas</div>
              <div className='navbar-item'>Bocetos</div>
              <div className='navbar-item'>Acerca de</div>
            </div>
            <div className='sinisterFoto'>
              <img src={SinisterFoto}/>
            </div>
          </nav>
        </div>
    </header>
  )
}

export default Navbar