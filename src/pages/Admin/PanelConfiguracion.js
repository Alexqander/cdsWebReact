import React from 'react'
import { CabezeraAdmin } from '../../components/cabezera/CabezeraAdmin'
import { SideBar } from '../../components/SideBar'

export const PanelConfiguracion = () => {
  return (
    <>
    <SideBar/>
      <CabezeraAdmin 
      tituloSeccion="Configuracion"
      urlProfile="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/3c4564a2-3d24-499d-a44d-e7270d1668f2.jpg."
      firstName="Alexander"
      lastName="Machado"
      />
      </>
    
  )
}
