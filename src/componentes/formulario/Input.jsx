import React, {useState} from "react";

export default props =>{
    const [valor, setValue] = useState("");
    const [valor2, setValue2] = useState("");
    const [valor3, setValue3] = useState("");
    const [valor4, setValue4] = useState("");

    function salvalogin(e){
        setValue(e.target.value);
    }

    function salvasenha(e){
        setValue2(e.target.value);

    }

    function mostrarValores(){
        setValue3(valor)
        setValue4(valor2)
        console.log("Email: ", valor);
        console.log("Senha: ", valor2);
    }

    
   
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="">Email</label>
            <input value={valor} onChange={salvalogin}/>
            <label htmlFor="">Senha</label>
            <input value={valor2} onChange={salvasenha}/>
            <br></br>
            <button id="enviar" onClick={mostrarValores}>Clique para enviar</button>
            <h2>{valor3}</h2>
            <h2>{valor4}</h2>
        </div>
    )
}

