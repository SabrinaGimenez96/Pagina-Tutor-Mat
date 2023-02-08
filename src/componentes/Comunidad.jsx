import React from 'react';
import FotosComunidad from './FotosComunidad';
import Formulario from './Formulario';
import '../estilos/Comunidad.css';

function Comunidad (){
    return(
        <div className='contenedorComunidad'>
            <div className='comunidad'>
                <FotosComunidad
                    imagen = 'Alice'
                />
                <FotosComunidad
                    imagen = 'Ben'                    
                />
                <FotosComunidad 
                    imagen = 'Claire'                   
                />
                <FotosComunidad 
                    imagen = 'Iori'                   
                />
                <FotosComunidad  
                    imagen = 'Ivan'                   
                />
                <FotosComunidad
                    imagen = 'Judith'       
                />
                <FotosComunidad
                    imagen = 'Louis'                    
                />
                <FotosComunidad
                    imagen = 'Mali'                    
                />
                <FotosComunidad
                    imagen = 'Nim'                    
                />
                <FotosComunidad
                    imagen = 'Owen'                    
                />
                <FotosComunidad
                    imagen = 'Sam'                    
                />
                <FotosComunidad
                    imagen = 'Steph'                    
                />
                <FotosComunidad
                    imagen = 'Zak'                    
                />
            </div>
            <h1>Únanse a nuestra comunidad de fanáticos que aman TutorMat</h1>
            <Formulario
                textInput = 'Introduce tu correo electrónico...'
                textBoton = 'Enviar para mas información'
                principal={false}
            />
        </div>
    );
}
export default Comunidad;