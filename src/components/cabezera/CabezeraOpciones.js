import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CardOpciones } from '../cards/CardOpciones'

export const CabezeraOpciones = () => {

  return (
    <>
    <main className="mainStyle">
      <Container fluid className="px-4 mt-3">
        <Row>
          <Col>
          <Link to={'/panelProyectos'} className="linkSt">
          <CardOpciones titulo="Proyectos"
          urlImage="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/cf181abf-6436-4607-8555-b40a6ca80571.png."
          navRut='/panelProyectos'
          />
          </Link>
          </Col>
          <Col>
          <Link to={'/panelUsuarios'} className="linkSt">
          <CardOpciones titulo="Usuarios"
          urlImage="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/011b94f2-5ce3-4b4c-b9a1-af9d8a4a79aa.png."
          navRut='/panelUsuarios'
          />
          </Link>
          </Col>
          <Col>
          <Link to={'/panelConvocatorias'} className="linkSt">
          <CardOpciones titulo="Convocatorias"
          urlImage="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/77dd66af-f249-455b-8b43-4bdc1d332b88.png."
          navRut='/panelConvocatorias'
          />
          </Link>      
          </Col>
        </Row>
      </Container>
    </main>
    
    </>
  )
}
