import React from 'react';

const CardProduto = props => {
    return(

        <div className='Card'>

            <img src={props.imagem} />
            <h3> {props.nome} </h3> 

            <div className='Card-button'>
                
                <span>R$ {props.preco} </span> 
                <button >Adicionar ao carrinho</button>

            </div>
        </div>
    )
}

export default CardProduto;