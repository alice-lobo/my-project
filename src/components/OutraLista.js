function OutraLista({itens}) {
    return (
        <>
            <h3>Meus Itens</h3>

            {itens.length > 0 ? 
                (
                    itens.map(item => <p>{item}</p>)
                ) : (<p>Não há itens!</p>)     
            }
        </>
    )
}
export default OutraLista