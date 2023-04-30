import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import logoGabyLow from './Imagenes/logo_Gaby_Low.png';
import { useState } from 'react'

function App() {

   const [numClics, setNumClics] = useState(0);

   const manejarClic = () => {
    setNumClics(numClics + 1);
   }

   const reiniciarContador = () => {
    setNumClics(0);
   }

  return (
    <div className='App'>
     <div className='logo-contenedor'>
      <img
      className='gl-logo'
      src={logoGabyLow}
      alt='Logo GL' />
      </div>
      <div className='contenedor-contador'>
        <Contador numClics= {numClics} />
        <Boton
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div> 
    </div>
  );
}

export default App;
