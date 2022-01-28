import React from 'react';
import './App.css';
import Filtro from "./components/Filtros";
import Carrinho from "./components/Carrinho"
<<<<<<< HEAD
import logo from "./img/logoLab.png"
import Xbox from "./img/xbox.jpg";
import Foguete from "./img/foguete.jpg";
import Buzz from "./img/Buzz.jpg";
import EstrelaDaMorte from "./img/estrelaDaMorte.webp";
import Yoda from "./img/yoda.jpg";
import Trek from "./img/trek.jpg";
import Principe from "./img/principe.webp";
import R2 from "./img/R2.png";
import Gigantes from "./img/gigantes.jpg";
=======
>>>>>>> master


class App extends React.Component{
  state={
    ordenacao:"crescente",
  }
  produtos=[
  {
    nome:"Xbox",
    preco:2500,
    imagem:Xbox
  },
  {
    nome:"Exploradores do Espaço",
    preco:332.91,
    imagem:Foguete
  },
  {
    nome:"Buzz Lightyear",
    preco:198.56,
    imagem:Buzz
  },
  {
    nome:"Estrela da Morte",
    preco:525.65,
    imagem:EstrelaDaMorte
  },
  {
    nome:"Baby Yoda",
    preco:265.65,
    imagem:Yoda
  },
  {
    nome:"STAR TREK U.S.S.",
    preco: 406.30,
    imagem:Trek
  },
  {
    nome:"O Pequeno Príncipe",
    preco:250,
    imagem:Principe
  },
  {
    nome:"R2d2 Hasbro",
    preco:288.99,
    imagem:R2
  },
  {
    nome:"AT-ATs",
    preco:324.25,
    imagem:Gigantes
  },
  ]  
  onchangeOrdenacao= event => {
    this.setState({ordenacao:event.target.value});
  }
  render(){
      const produtosRenderizados= this.produtos
      .sort((objA, objB) => {
        switch(this.state.ordenacao){
          case "crescente":
            return objA.preco - objB.preco;
          case "decrescente":
            return objB.preco - objA.preco;
        }
      })
      .map(obj =>{
        return(
          <div>
            {/* <CardProduto nome={obj.nome} preco={obj.preco} imagem={obj.imagem} /> */}
          </div>
        )
      })
    return (

      <div className="App">
        <div className='Header'>
        <img src={logo}/>
        </div>
        <div className='Produtos'>
            <div>
              <div> <Filtro /> </div>
              <h4>Quant. de produtos: {produtosRenderizados.length}</h4>
            </div>
            <div> </div>
            <div className='Selecione-opcao'>
              <p>Ordenação</p>
              <select onChange={this.onchangeOrdenacao} name="select" value={this.state.ordenacao}>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
              </select>
            </div>
            {produtosRenderizados}
        </div>
        <div> <Carrinho /> </div>
      </div>
    );
  }
}
export default App;


// function App() {
//   return (
//     <div className="App">
//       <div className='Header'>
//       <img src={logo} alt='logo da LabEComerce'/>
//       </div>

//       <div> <Filtro /> </div>
//       <div className='Produtos'> 
//           <div>  </div>
//           <div>  </div>
//           <div>  </div>

//           <div>  </div>
//           <div>  </div>
//           <div>  </div>
//       </div>
//       <div>  </div>
//     </div>
//   );
// }

// export default App;
