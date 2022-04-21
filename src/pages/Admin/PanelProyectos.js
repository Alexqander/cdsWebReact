import React from 'react'
import { CabezeraAdmin } from '../../components/cabezera/CabezeraAdmin'
import { ContenedorProyec } from '../../components/contenedor/ContenedorProyec'
import { SideBar } from '../../components/SideBar'

export const PanelProyectos = () => {
  
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
    <SideBar/>
      <CabezeraAdmin 
      tituloSeccion="Proyectos"
      urlProfile="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/3c4564a2-3d24-499d-a44d-e7270d1668f2.jpg."
      firstName={nombre}
      lastName={apellido}
      />
      <ContenedorProyec/>
      </>
      
      
  )
}
