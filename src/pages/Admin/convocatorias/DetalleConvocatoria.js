import React from 'react'
import { useParams } from 'react-router-dom'
import { CabezeraAdmin } from '../../../components/cabezera/CabezeraAdmin'
import { CabezeraConvo } from '../../../components/cabezera/CabezeraConvo'
import {TableConvocatorias}  from '../../../components/data/TableConvocatorias'
import { SideBar } from '../../../components/SideBar'

export const DetalleConvocatoria = () => {


  const {id} = useParams();

  return (
    <>
    <SideBar/>
    <CabezeraAdmin 
      tituloSeccion="Convocatoria"
      urlProfile="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/3c4564a2-3d24-499d-a44d-e7270d1668f2.jpg."
      firstName="Alexander"
      lastName="Machado"
      />
    <CabezeraConvo
      tituCard1="Periodo"
      tituInfo="Aspirantes"
      tituInfo2="Becarios"
      />
      <TableConvocatorias 
      idConvocatoria={id}
      />
    </>
  )
}
