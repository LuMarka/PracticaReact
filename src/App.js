import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from "./componentes/Header/Header.js";
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/lumarka.png",
    nombre: "Luisa Markarian",
    puesto: "Alumna"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/belenfrak.png",
    nombre: "Ma. Belén Fraca",
    puesto: "Alumna"
    },
  {
  equipo: "Front End",
  foto: "https://github.com/belenfrak.png",
  nombre: "Ma. Belén Fraca",
  puesto: "Alumna"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/lumarka.png",
    nombre: "Luisa Markarian",
    puesto: "Alumna"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/belenfrak.png",
    nombre: "Ma. Belén Fraca",
    puesto: "Dev FullStack"
  },
  {
    equipo: "Data Science",
    foto: "https://github.com/belenfrak.png",
    nombre: "Ma. Belén Fraca",
    puesto: "Estudiante"
  },
  {
    equipo: "Data Science",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "DevOps",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "DevOps",
    foto: "https://github.com/lumarka.png",
    nombre: "Luisa Markarian",
    puesto: "Estudiante de programación"
  },
  {
    equipo: "Móvil",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },

]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //el ternario puede reemplzarse como un cortocircuito:
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador:
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador)
    //Spreas operator
    actualizarColaboradores([...colaboradores,colaborador])
  }
  //Eliminar colaborador:
  const eliminarColaborador = () =>{
    console.log("Elimminar Colaborador")
  }

  // Actualizar color de equipo:
  const actualizarColor = (color, titulo) =>{
    console.log("Actualizar: ", color, titulo)
  }

  //Lista de equipos
  const equipos = [
    {
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo:"DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }  
]
  return ( 
    <div>
     <Header/>
     { /*otra manera de hacer lo mismo {mostrarFormulario === true ? <Formulario/> : <></>}*/}
     {mostrarFormulario && <Formulario 
      equipos ={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      />}

     <MiOrg cambiarMostrar ={cambiarMostrar}/>
    {
      equipos.map((equipo) => <Equipo 
      datos={equipo} 
      key={equipo.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador ={eliminarColaborador}
      actualizarColor={actualizarColor}
      />
      )
    }

      <Footer />

    </div>
  );
}

export default App;
