import { useState } from "react";

function FormTest() {

    function cadastrarName(e) {
        e.preventDefault();
        console.log(name);
        
    }

    const [name, setName] = useState();

    return(
        <div>
            <form onSubmit={cadastrarName}>
                <div>
                    <label>Nome:</label>
                    <input 
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={ (e) => setName(e.target.value)}
                        />
                    </div>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
    )
}
export default FormTest;