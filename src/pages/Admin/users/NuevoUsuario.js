import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CabezeraAdmin } from "../../../components/cabezera/CabezeraAdmin";
import { RegisterUser } from "../../../components/forms/RegisterUser";
import { SideBar } from "../../../components/SideBar";

export const NuevoUsuario = () => {
  let nombre = "aa";
  let apellido = "ee";
  const cargarPerfil = () => {
    try {
      const usuario = JSON.parse(window.localStorage.getItem("@user"));
      console.log("estos son los datos de mi usuario");
      console.log(usuario);
      const { token } = usuario;
      window.localStorage.setItem("@userToken", JSON.stringify(token));
      const {
        user: { person },
      } = usuario;
      nombre = person.name;
      apellido = person.lastname;
    } catch (error) {
      console.log(error);
    }
  };
  cargarPerfil();
  return (
    <>
      <SideBar />
      <CabezeraAdmin
        tituloSeccion="Nuevo Usuario"
        urlProfile="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/3c4564a2-3d24-499d-a44d-e7270d1668f2.jpg."
        firstName={nombre}
        lastName={apellido}
      />

      <main className="mainStyle">
        <Container fluid className="px-4">
          <Row>
            <Col>
              <RegisterUser></RegisterUser>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </main>
    </>
  );
};
