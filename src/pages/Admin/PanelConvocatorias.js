import React from 'react'
import { CabezeraAdmin } from '../../components/cabezera/CabezeraAdmin'
import { CabezeraConvo } from '../../components/cabezera/CabezeraConvo'
import { CabezeraOpciones } from '../../components/cabezera/CabezeraOpciones'
import { ContenedorConvocatorias } from '../../components/contenedor/ContenedorConvocatorias'
import { SideBar } from '../../components/SideBar'

export const PanelConvocatorias = () => {

  let nombre ="aa"
  let apellido="ee"
  const cargarPerfil = () =>{
    try {
      const usuario = JSON.parse(window.localStorage.getItem('@user'))
      console.log("estos son los datos de mi usuario")
      console.log(usuario)
      const {token} = usuario
      window.localStorage.setItem('@userToken',JSON.stringify(token))
      const {user:{person}} =usuario
      nombre =person.name
      apellido = person.lastname
    } catch (error) {
      console.log(error)      
    }
  }
  cargarPerfil()



  
  return (
    <>
      <SideBar />
      <CabezeraAdmin
        tituloSeccion="Convocatorias"
        urlProfile="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/3c4564a2-3d24-499d-a44d-e7270d1668f2.jpg."
        firstName={nombre}
        lastName={apellido}
      />
      <CabezeraConvo
        tituCard1="Agregar"
        tituInfo="Aspirantes"
        tituInfo2="Becarios"
      />

      <ContenedorConvocatorias />
    </>
  );
}
