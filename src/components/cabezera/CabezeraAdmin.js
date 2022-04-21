import React from 'react'
import { Col, Container, Row,Dropdown } from 'react-bootstrap'
import Avatar from '@mui/material/Avatar';

export const CabezeraAdmin = (props) => {

    const{tituloSeccion , urlProfile , firstName ,lastName} = props

  return (
    <>
<main className="mainStyle">
<Container fluid className='px-4'>
    <Row>
        <Col className="d-flex justify-content-end align-items-center py-5">
          <Avatar
          alt="Remy Sharp"
          src={urlProfile}
          sx={{ width: 56, height: 56 }}
          />
            <div className="d-flex flex-column mx-4">
                <span className='nombreUsuario'>{firstName}</span>
                <span className='nombreUsuario'>{lastName}</span>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="primary" size='lg' id="dropdown-basic">
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Configuracion</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Cerrar Sesión</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Col>
    </Row>
    <Row>
        <Col className="d-flex justify-content-start"><h1 className="seccion" style={{color: 'white'}}>{tituloSeccion}</h1></Col>
    </Row>
</Container>
</main>
    </>
  )
}
