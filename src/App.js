import React from 'react';
import './App.css';
import Filtro from "./components/Filtro";
import Carrinho from "./components/Carrinho"
import CardProduto from './components/CardProduto';


function App() {
  return (
    <div className="App">
      <div className='Header'>
      <img src={logo}/>
      </div>

      <div> <Filtro /> </div>
      <div className='Produtos'> 
          <div> <CardProduto /> </div>
          <div> B </div>
          <div> C </div>

          <div> D </div>
          <div> E </div>
          <div> F </div>

          <div> G </div>
          <div> <CardProduto /> </div>
          <div> I </div>
      </div>
      <div> <Carrinho /> </div>
    </div>
  );
}

export default App;
