import './App.css';
import Encabezado from './componentes/Encabezado';
import Formulario from './componentes/Formulario';
import Testimonio from './componentes/Testimonio';
import Seccion from './componentes/Seccion';
import Comunidad from './componentes/Comunidad';
import TestimonioBanner from './componentes/TestimonioBanner';


function App() { 
  return (
    <div className="App">
      <div className='contenedor-ppal'>
        <Encabezado
          imagenLogo = 'logoTutor'
          imagen = 'img-encabezado'
        />
        <Formulario
          textInput = 'Introduce tu correo electrónico...'
          textBoton = 'Únete a la lista de espera' 
          principal={true}
        />
        <Testimonio 
          textTestimonio = 'TutorMat ha cambiado mi forma de entender la matemática.'
          imagen = 'Ellie'
          nombre = 'Ellie Mings'
        />
        <Seccion
          tituloSeccion = 'Encuentra el mejor profesor' 
          textoSeccion = 'TutorMat le ayuda a encontrar al profesor adecuado para su nivel y requisitos. Puede encontrar el mejor profesor de matematicas para ayudar a alcanzar sus objetivos.'
          imagen = 'img-encontrar'
          encuentra = {true}
        />
        <Seccion 
          tituloSeccion = 'Mejora tus habilidades matematicas'
          textoSeccion = 'Use TutorMat para mejorar sus habilidades matemáticas. Encuentra a los profesores con experiencia para que le ayuden a aprobar sus exámenes y mejorar sus calificaciones.'
          imagen = 'img-mejorar'
          encuentra = {false}
        />
        <TestimonioBanner
          imagen = 'Sally'
        />
        <Comunidad/>
      </div>

    </div>
  );
}

export default App;
