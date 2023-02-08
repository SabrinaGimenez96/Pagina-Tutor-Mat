import React from 'react';
import '../estilos/Encabezado.css';

function Encabezado (props) {
    return (
        <div className='contenedorEncabezado'>
            <div className="logo-nombre">
                <img src={require(`../imagenes/${props.imagenLogo}.svg`)} alt="logo-tutormat" />
                <h4>TutorMat</h4>
            </div>            
            <div className='encabezado'>                
                <h1>
                    Obtenga los mejores resultados matemáticos con TutorMat
                </h1>
                <img src={require(`../imagenes/${props.imagen}.png`)} alt="imagen-encabezado" />
            </div>
                <div className='pregunta'>
                    <p>¿Estás buscando un profesor de matemáticas? Nuestra herramienta te ayuda a 
                    encontrar al mejor profesor para tus necesidades.</p>
                </div> 
            
        </div>
    );
}

export default Encabezado;