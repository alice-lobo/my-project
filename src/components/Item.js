import PropTypes from 'prop-types';

function Item({marca, ano_lancamento}) {
    return(
        <li>{marca} - {ano_lancamento}</li>

    )
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}
export default Item