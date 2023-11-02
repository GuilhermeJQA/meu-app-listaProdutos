import React from "react";
import produtos from "../Mocks/produtos"

export default props => {

    const list = produtos.map((produtos, i) =>{
        return (
            <tr key={i}>
                <th>{produtos.id}</th>
                <td>{produtos.nome}</td>
                <td>{produtos.preco}</td>
            </tr>
        )
    });
    

    return (
        <div>
           <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
        </div>
    )
}