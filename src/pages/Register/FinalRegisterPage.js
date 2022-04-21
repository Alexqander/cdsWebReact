import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const FinalRegisterPage = () => {
    const navigate = useNavigate()
    const handleClick =()=>{
      navigate('concovatorias')  

  }
  return (
    <>
    <Container fluid>
        <Row>
        <div className="espacio1">

        </div>
            <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className="mt-5">
                <img src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/a84c845d-4f59-43cb-b7f8-649edf039ba8.png."/>
            </div>
            </Col>
            <Col md={6} className="px-5 d-flex flex-column">

                <div className="text-start login-text">
                    <h1 style={{fontSize:60}}>TE REGISTRO SE HA ENVIADO CORRECTAMENTE</h1>
                    <h3 style={{fontSize:30}}>Te reconmendamos estar atento a 
                        tu correo al igual que a las publicaciones en nuestras redes 
                        sociales para continuar con tu proceso.</h3>
                </div>
                <div className="mt-5">
                    <Button className='btn-log' onClick={handleClick}>
                    Finalizar
                    </Button>
                </div>


            </Col>
        </Row>
    </Container>
    </>
  )
}
