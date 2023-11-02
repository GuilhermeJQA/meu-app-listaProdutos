import React from "react";
import produtos from "../Mocks/produtos";

export default props => {

const getLinhas = null;

return (
    <div>
        <table>
            <thead>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
            </thead>
            <tbody>
                {getLinhas}
            </tbody>
        </table>
    </div>
)
}