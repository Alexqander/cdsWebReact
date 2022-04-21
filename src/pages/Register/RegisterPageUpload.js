import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RegisterForm } from '../../components/forms/RegisterForm'
import { UploadFileForm } from '../../components/forms/UploadFileForm'

export const RegisterPageUpload = () => {
  return (
    <>
     <Container fluid>
        <Row className="">
            <Col md={5} sm={12} className="d-flex flex-column infoRegistro">
            <div className="text-start mb-4">
            <h1 style={{fontSize:50}}>REGISTRO</h1>
            <h4 style={{fontSize:25}} >Sube tu CV</h4>    
            </div>
            <div className="mt-4">
                <img src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/0ff8f7d1-6296-4bd4-a459-bf920a18d98b.png."></img>
            </div>
            </Col>
            <Col md={7} sm={12} className="cajaFormulario uplo mt-5 py-5 d-flex align-items-center justify-content-end">
              <div className="">
              <UploadFileForm navrut="/registerfinal"/>
              </div>
              
            </Col>
        </Row>
     </Container>
    </>
  )
}
