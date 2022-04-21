import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import { CardInfoConvo } from '../cards/CardInfoConvo'
import {Link} from 'react-router-dom'
export const CabezeraConvo = (props) => {
  const{tituCard1,tituInfo,tituInfo2} = props
  return (
    <>
    <main className="mainStyle">
      <Container fluid className="px-4 mt-3">
        <Row>
          <Col>
          <Link to={'/panelProyectos'} className="linkSt">
          <CardInfoConvo titulo={tituCard1}
          info={'Mayo Agosto 2022'}
          />
          </Link>
          </Col>
          <Col>
          <Link to={'/panelUsuarios'} className="linkSt">
          <CardInfoConvo titulo={tituInfo}
          info={100}
          />
          </Link>
          </Col>
          <Col>
          <Link to={'/panelConvocatorias'} className="linkSt">
          <CardInfoConvo titulo={tituInfo2}
          info={30}
          />
          </Link>      
          </Col>
        </Row>
      </Container>
    </main>
    </>
  )
}
