import React, { useEffect, useState } from "react";
import { ConvocatoriaCard } from "../../components/cards/ConvocatoriaCard";
import { FooterPublic } from "../../components/FooterPublic";
import { NavPublico } from "../../components/NavPublico";
import axios from "../../shared/plugins/Axios";

export const ConvocatoriasPage = () => {
  const [convocatorias, setConvocatorias] = useState([]);

  const getConvocatorias = () => {
    axios({
      url: "/convocatorias/",
      method: "GET",
    })
      .then((response) => {
        const {
          data: { data },
        } = response;
        setConvocatorias(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getConvocatorias();
  }, []);
  const urlImageError =
    "https://cdsfilesbucket.s3.us-east-2.amazonaws.com/55ccd36c-4a68-45b2-89c7-961dc46129f3.png.";
  const urlImageConv =
    "https://cdsfilesbucket.s3.us-east-2.amazonaws.com/0f390f29-fa5e-48a5-97d9-9e72ba56bbdc.png.";
  let imgMostrar = urlImageError;
  let tituloConv = "hola";
  let infoCon = "es una prueba";
  let activeSocial = true;
  let buttonsAc = false;

  const convocatoriaDefault = {
    tituloD: "POR EL MOMENTO NO HAY CONVOCATORIAS DISPONIBLES",
    descriptionD:
      "Siguenos en nuestras cuentas oficiales para enterarte cuando este disponible una nueva convocatoria",
    linksActives: true,
  };

  const convocatoriaActiva = (convocatorias, convocatoriaDefault) => {
    //aqui evaluo si existe una convocatoria activsa
    const convActiva = convocatorias.filter(
      (convocatorias) => convocatorias.status.id == 1
    );
    const { tituloD, descriptionD, linksActives } = convocatoriaDefault;
    window.localStorage.setItem("convocatoria", JSON.stringify(convActiva));
    if (convActiva.length !== 0) {
      const [{ description, startDate }] = convActiva;
      buttonsAc = true;
      imgMostrar = urlImageConv;
      activeSocial = false;
      tituloConv = description;
      infoCon = `Fehca de Inicio ${startDate}`;
    } else {
      buttonsAc = false;
      imgMostrar = urlImageError;
      activeSocial = linksActives;
      tituloConv = tituloD;
      infoCon = descriptionD;
    }
  };

  convocatoriaActiva(convocatorias, convocatoriaDefault);

  return (
    <>
      <NavPublico />
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col">
            <img
              className="img-cds"
              src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/fe86ea0f-1a91-42c7-a539-a189a144b0d4.jpg."
            />
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-4">
            <ConvocatoriaCard
              className="mt-4 "
              title={tituloConv}
              info={infoCon}
              buttons={buttonsAc}
              urlimages={imgMostrar}
              navrut="/home"
              rutRegister="/register"
              linksActive={activeSocial}
            />
          </div>
        </div>
        <FooterPublic />
      </div>
    </>
  );
};
