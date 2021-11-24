import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li><Item marca="ferrari" ano_lancamento={2021}/></li>
                <li><Item marca="fiat" ano_lancamento={2010}/></li>
                <li><Item /></li>
            </ul>
        </>
    )

}

export default List;