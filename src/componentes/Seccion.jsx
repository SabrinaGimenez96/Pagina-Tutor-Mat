import React from 'react';
import '../estilos/Seccion.css';

function Seccion ({imagen, tituloSeccion, textoSeccion, encuentra}){
    return(
        <section className= {encuentra ? 'encuentraProfe' : 'mejoraHabilidades'}>
            <div className='textos'>
                <h1>{tituloSeccion}</h1>
                <p>{textoSeccion}</p>                
            </div>
            <img src={require(`../imagenes/${imagen}.png`)} alt="img-seccion" />
        </section>
    );
}
export default Seccion;