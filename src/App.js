import React from 'react';
import './App.css';
import Filtro from "./components/Filtro";
import Carrinho from "./components/Carrinho"
import logo from "./img/logoLab.png"
import CardProduto from './components/CardProduto'



function App() {
  return (
    <div className="App">
      <div className='Header'>
      <img src={logo} alt='logo da LabEComerce'/>
      </div>

      <div> <Filtro /> </div>
      <div className='Produtos'> 
          <div> <CardProduto /> </div>
          <div> <CardProduto /> </div>
          <div> <CardProduto /> </div>

          <div> <CardProduto /> </div>
          <div> <CardProduto /> </div>
          <div> <CardProduto /> </div>


      </div>
      <div> <Carrinho /> </div>
    </div>
  );
}

export default App;
