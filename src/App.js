import './App.css';
import React from 'react';
import { useState } from 'react';
import { useAppSelector } from './hooks/store';
import Ejercicio from './components/Ejercicio';

function App() {
  const sentences = useAppSelector(state => state.frases)
  const [tarjeta, setTarjeta] = useState(0)

  
console.log(sentences)
console.log(sentences.length)
  return (
    <div className="App">
      <h1>Morfología para Isabella</h1>
      <p>Sé que lo vas a hacer bien, suerte!
      </p>
      <Ejercicio 
        frase={sentences[tarjeta]}
      />
      {(tarjeta + 1 < sentences.length) ? <button onClick={()=> setTarjeta(tarjeta + 1)}>Siguiente</button>
      :
      <p>Terminaste!</p>}
      
    </div>
  );
}

export default App;
