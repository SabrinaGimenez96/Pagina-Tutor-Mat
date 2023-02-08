import React from 'react';
import '../estilos/TestimonioBanner.css';

function TestimonioBanner (props) {
    return(
        <div className ="contenedorTesti">
            <h1>"Con los profesores de TutorMat, he mejorado mis resultados de matemáticas."</h1>
            <div className="nombre-foto">
                <p>Sally Sinistra</p>
                <img src={require(`../imagenes/${props.imagen}.png`)} alt="foto-persona" />
            </div>
        </div>
    );
}
export default TestimonioBanner;