import './App.css';
import React from "react";
import Card from './componentes/layout/Card';
import TabelaProdutos from './componentes/repeticao/TabelaProdutos';
import ListProdutos from './componentes/repeticao/ListProdutos';
export default () => {

    return (
      <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
          <Card titulo="Produtos" color='#DC143C'>
          <h1>Lista de Produtos</h1>
            <ListProdutos></ListProdutos>
          </Card>
      </div>
      
  </div>
    )

}