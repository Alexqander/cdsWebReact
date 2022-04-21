import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/SideMenuStyles.css";
import { useAuth } from "../hooks/useAuth";

export const SideBar = () => {

    const auth = useAuth();

  return ( 
    <>
      <div className="side-menu">
        <Container fluid>
          <Row>
            <Col className="d-flex justify-content-start">
              <h2 style={{ fontSize: 45 }}>CDS</h2>
            </Col>
          </Row>
          <div className="espacio1"></div>
          <Row className="d-flex flex-column text-start">
            <Link to={"/panelPrincipal"} className="d-flex links ">
              <i className="fi fi-rr-home mx-3 icons"></i>
              <p className="mt-4">Inicio</p>
            </Link>
            <Link to={"/panelConvocatorias"} className="d-flex links ">
              <i className="fi fi-rr-calendar mx-3 icons"></i>
              <p className="mt-4">Convocatorias</p>
            </Link>
            <Link to={"/panelUsuarios"} className="d-flex links ">
              <i className="fi fi-rr-users mx-3 icons"></i>
              <p className="mt-4">Usuarios</p>
            </Link>
            <Link to={"/panelProyectos"} className="d-flex links ">
              <i className="fi fi-rr-layout-fluid mx-3 icons"></i>
              <p className="mt-4">Proyectos</p>
            </Link>

            <Link to={"/panelConfiguracion"} className="d-flex links ">
              <i className="fi fi-rr-settings mx-3 icons"></i>
              <p className="mt-3">Configuracion</p>
            </Link>
            <Col className="mt-5">
              <button
                className="btn-salir"
                onClick={()=>{auth.loggut()}}
                style={{ width: "100%", borderRadius: 20, marginTop: 160 }}
              >
                <i className="fi fi-rr-power"></i>
                Salir
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
