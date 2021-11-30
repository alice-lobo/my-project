import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();
    
    function cadastrarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
    }
    function limparEmail(e) {
        e.preventDefault();
        setUserEmail('');
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <input type="email" 
            placeholder="Digite o seu e-mail"
            onChange={ (e) => setEmail(e.target.value)} />
            <button type="submit" onClick={cadastrarEmail}>Enviar e-mail</button>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail} >Limpar e-mail</button>
                </div>
            )}
        </div>
    )
}
export default Condicional;