import { useState } from "react";

function Condicional() {
    function cadastrarEmail(e) {
        e.preventDefault();
        console.log(email);
    }

    const [email, setEmail] = useState();

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <input type="email" 
            placeholder="Digite o seu e-mail"
            onChange={ (e) => setEmail(e.target.value)} />
            <button type="submit" onClick={cadastrarEmail}>Enviar e-mail</button>
        </div>
    )
}
export default Condicional;