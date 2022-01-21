import React from 'react';
import {Filtro, TodosOsFiltros} from "./styleFiltros";

class Filtros extends React.Component {
    render() {
      return <TodosOsFiltros>
          <h2>Filtros</h2>
          <Filtro>
              Valor Mínimo:
              <input type={"number"}
              value={this.props.Vminimo}
              onChange = {this.props.onChangeValorMinimo}
              />
          </Filtro>
          <Filtro>
              Valor Máximo:
              <input type={"number"}
              value={this.props.Vmaximo}
              onChange = {this.props.onChangeValorMaximo}
              />
          </Filtro>
          <Filtro>
              Busca por nome:
              <input type={"text"}
              value={this.props.PorNome}
              onChange = {this.props.onChangePorNome}
              />
          </Filtro>
      </TodosOsFiltros>;
    }
  }
  export default Filtros;