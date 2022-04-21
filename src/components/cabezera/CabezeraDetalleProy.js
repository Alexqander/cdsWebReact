import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CardAdmins } from '../cards/proyectos/CardAdmins'
import { CardPeriodo } from '../cards/proyectos/CardPeriodo'
import { CardProgres } from '../cards/proyectos/CardProgres'

export const CabezeraDetalleProy = () => {
  return (
    <>
      <main className="mainStyle">
      <Container fluid className="px-4 mt-3">
        <Row>
          <Col>
          <Link to={'/panelProyectos'} className="linkSt">
            <CardProgres
            titulo="Progreso"
            progres={75}
            />
          </Link>
          </Col>
          <Col>
          <Link to={'/panelUsuarios'} className="linkSt">
          <CardAdmins
          titulo='Administrador del proyecto'
          usuario='Alexander Machado Amberocio'
          />
          </Link>
          </Col>
          <Col>
          <Link to={'/panelConvocatorias'} className="linkSt">
            <CardPeriodo
            titulo='Periodo'
            fechain='01/03/2022'
            fechaFin='06/07/2022'
            fechaEst='06/08/2022'
            
            />
          </Link>      
          </Col>
        </Row>
      </Container>
    </main>
    
    </>
    )
}
