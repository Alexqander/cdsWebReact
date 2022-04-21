import React from 'react'
import { InfoCard } from '../../components/cards/InfoCard'
import { FooterPublic } from '../../components/FooterPublic'
import { NavPublico } from '../../components/NavPublico'

export const HomePage = () => {
  return (
    <>
    <NavPublico/>
     <div className="container-fluid p-0">
        <div className="row">
          <div className="col">
            <img className="img-cds"
            src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/fe86ea0f-1a91-42c7-a539-a189a144b0d4.jpg."
            />
          </div>
          <div className="col">

          </div>
        </div>
        <div className="row">
        <div className="col-12 d-flex justify-content-center mt-4">
          <InfoCard title="Nosotros" info="El Centro de Desarrollo de Software de la Universidad Tecnológica Emiliano Zapata del Estado de Morelos CDS-UTEZ, es un centro de entrenamiento
           cuyo objetivo principal es la de formar a estudiantes y egresados en las nuevas tecnologías de la información."
            urlimages="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/2f64b167-78af-4492-95f7-8b4d39b4b21d.png."
            activeButton={false}
            ></InfoCard>
          </div>
          <div className="col-12 d-flex justify-content-center mt-4">
          <InfoCard title="Convocatorias" info="Conoce nuestras convocatorias
           para realizar tus estadias o para ingresar a nuestro programa de becarios"
            urlimages="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/2993f90a-751d-4284-a155-dc503c83cf2c.png."
            activeButton={true}
            navrut="/convocatorias"></InfoCard>
          </div>
          <div className="col-12 d-flex justify-content-center mt-4">
          <InfoCard title="Plataforma CDS" info="Plataforma web con fines de uso administrativos , destinada a los miembros e integrantes del Centro de Dessarrollo de Software."
            urlimages="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/1ee9b627-0c5f-44f1-8aae-8e008b53d940.png."
            activeButton={true}
            navrut="/login"></InfoCard>
          </div>
        </div>
        <FooterPublic/>
    </div>
    </>
  )
}
