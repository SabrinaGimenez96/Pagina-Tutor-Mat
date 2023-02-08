import React from 'react';
import '../estilos/FotosComunidad.css';

function FotosComunidad(props){
    return(
        <div className='contenedorF'>
            <img src={require(`../imagenes/${props.imagen}.png`)} alt="fotos-comunidad" />
        </div>

    );
}
export default FotosComunidad;