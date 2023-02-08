import React from 'react';
import '../estilos/Testimonio.css'

function Testimonio (props) {
    return(
        <div className='contenedorTestimonio'>
            <div className="foto">
                <img src={require(`../imagenes/${props.imagen}.png`)} alt="foto-testimonio" />
            </div>
            <div className='testimonio'>
                <strong className='testi'>"{props.textTestimonio}"</strong>
                <strong className='nombre'><small>{props.nombre}</small></strong>
            </div>
        </div> 
    );
}

export default Testimonio;