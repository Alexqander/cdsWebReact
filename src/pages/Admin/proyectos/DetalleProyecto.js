import React from "react";
import { CabezeraAdmin } from "../../../components/cabezera/CabezeraAdmin";
import { CabezeraDetalleProy } from "../../../components/cabezera/CabezeraDetalleProy";
import { ContenedorInfoProy } from "../../../components/contenedor/ContenedorInfoProy";
import { TableIntegrantes } from "../../../components/data/TableIntegrantes";
import { SideBar } from "../../../components/SideBar";

export const DetalleProyecto = () => {
  return (
    <>
      <SideBar />

      <CabezeraAdmin
        tituloSeccion="Detalle del proyecto"
        urlProfile="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/3c4564a2-3d24-499d-a44d-e7270d1668f2."
        firstName="Alexander"
        lastName="Machado"
      />
      <CabezeraDetalleProy />
      <ContenedorInfoProy />
    </>
  );
};
