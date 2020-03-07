import React from 'react';
import {connect} from 'react-redux';
import {removeToCar,quitar} from '../actions';
import '../assets/styles/components/products_comprados.scss';
const Products_comprados= props => {
    const {uno,numero,id,cover, title, description,cost, islist} = props;
    const DeleteToCarf = itemId => {
        props.removeToCar(itemId);
    }
    const numero_p = cost * numero;
    return(
        <>
        <table className="responsive-table">
            <tbody>
                <tr>
                    <td>
                        <img className="responsive-img" src={cover} alt={title}/>
                        <p className="p">{title}</p>
                        <p className="p">{`Costo: ${numero_p} soles`}</p>
                        <p className="p">{`Estás pidiendo ${numero} veces este mismo producto`}</p>
                        {
                            numero > 1 ?
                            <a className="btn waves-effect waves-light black" onClick={() => DeleteToCarf(id)}>
                            Eliminar Productos<i className="material-icons right">remove_shopping_cart</i>
                            </a>:
                            <a className="btn waves-effect waves-light black" onClick={() => DeleteToCarf(id)}>
                            Eliminar Producto<i className="material-icons right">remove_shopping_cart</i>
                        </a>
                        }
                        {' '}
                        <a className="btn-floating waves-effect waves-light black">
                        <i className="material-icons">add_circle</i>
                            </a>
                        <a className="btn-floating waves-effect waves-light black">
                        <i className="material-icons">remove_circle</i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    );
};

const mapDispatchToProps = {
    removeToCar,
    quitar,
}


export default connect(null,mapDispatchToProps)(Products_comprados);