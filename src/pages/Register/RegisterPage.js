import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RegisterForm } from '../../components/forms/RegisterForm'


export const RegisterPage = () => {
  return (
    <>
     <Container fluid>
        <Row className="">
            <Col md={5} sm={12} className="d-flex flex-column infoRegistro">
            <div className="text-start mb-4">
            <h1 style={{fontSize:50}}>REGISTRO</h1>
            <h4 style={{fontSize:25}} >Datos de contacto</h4>    
            </div>
            <div className="mt-4">
                <img src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/9a1d15eb-8132-4fc8-9c4e-ef826f631594.png."></img>
            </div>
            </Col>
            <Col md={7} sm={12} className="cajaFormulario mt-5 px-5 py-5">
              <RegisterForm navrut='/registerupload'/>
            </Col>
        </Row>
     </Container>
    </>
  )
}
