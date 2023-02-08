import React from 'react';
import '../estilos/Formulario.css'

function Formulario ({textInput, textBoton, principal}){
    return (
        <div className= {principal ? 'contenedorPrincipal' : 'contenedorFinal'}>
            <form method='get'>   
                <label for="mail"></label>         
                <input type="email" name="mail" id="usuario_mail" required placeholder= {textInput}/>
                <button type="submit"> {textBoton} </button>
            </form>
        </div>
    );
}

export default Formulario;