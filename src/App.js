import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from "./componentes/Header/Header.js";
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/lumarka.png",
    nombre: "Luisa Markarian",
    puesto: "Alumna"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/belenfrak.png",
    nombre: "Ma. Belén Fraca",
    puesto: "Alumna"
    },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/belenfrak.png",
    nombre: "Ma. Belén Fraca",
    puesto: "Alumna"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/lumarka.png",
    nombre: "Luisa Markarian",
    puesto: "Alumna"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/belenfrak.png",
    nombre: "Ma. Belén Fraca",
    puesto: "Dev FullStack"
  },
  {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://github.com/belenfrak.png",
    nombre: "Ma. Belén Fraca",
    puesto: "Estudiante"
  },
  {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "DevOps",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "DevOps",
    foto: "https://github.com/lumarka.png",
    nombre: "Luisa Markarian",
    puesto: "Estudiante de programación"
  },
  {
    id: uuid(),
    equipo: "Móvil",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },

  ]);
  const[equipos, actualizarEquipos] = useState ([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo:"DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }  
  ])


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
  const eliminarColaborador = (id) =>{
    console.log("Elimminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // Actualizar color de equipo:
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo:
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  return ( 
    <div>
     <Header/>
     { /*otra manera de hacer lo mismo {mostrarFormulario === true ? <Formulario/> : <></>}*/}
     {mostrarFormulario && <Formulario 
      equipos ={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
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
