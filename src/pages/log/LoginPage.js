import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../../components/forms/LoginForm'
import { NavPublico } from '../../components/NavPublico'

export const LoginPage = () => {

  

  return (
    <>
    <Container fluid>
      <Row>
        <Col md={7} className="d-flex flex-column">

          <div className=" d-flex justify-content-start mx-5">
            <img className="logo-cds" src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/451e4bdf-1dfb-4242-9958-faa904479b3d.png."></img>
          </div>  

        <div className="mt-5">
          <img src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/7181a2d7-0680-4ff3-ae57-5a412992803c.png."></img>
        </div>
        
        </Col>
        <Col md={5} className="d-flex flex-column text-start login-text  caja-login">

        <div className="espacio">
          
          </div>

          <div className="align-self-center">
          <h1 style={{fontSize:60}}>BIENVENIDO</h1>
          <h3 style={{fontSize:30}}>Iniciar Sesíon</h3>
          </div>

          <LoginForm/>
        </Col>
      </Row>
    </Container>
    </>
  )
}
