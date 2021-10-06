import React from 'react'
import ReactLoading from 'react-loading'
import Rutas from './routes/rutas'
import './app.css'
import Video from './assets/inicio.mp4'

function App() {
  const[done, setDone]= React.useState(undefined)
  setTimeout(()=>{
    setDone(true)
}, 6000)

  return (<>
      
    {!done? 
    <div className="load">
      <video className='videoTag' autoPlay loop muted height="100%" width="100%">
    <source src={Video} type='video/mp4' />
</video>
    </div>
      :
       <Rutas/>}
        
    </>
    
  );
}

export default App;
