import React from 'react'
import { Badge, Button, Card, Col, Row } from 'react-bootstrap'

export const CardConvocatoria = (props) => {
    const {periodo,description,navegacion,aspirantes,becarios} =props
  return (
    <>
    <Card className="opcionesCards">
        <Card.Body className="text-left mx-4" >
            <Card.Text className=" d-flex flex-column align-items-between justify-content-between mb-3 text-start">
             <Row>
               <Col md={8} className="info d-flex flex-column py-2">
                <div className="d-flex mb-2">
                   <h3 className="me-3">{periodo}</h3>
                   <Badge pill bg="success">
                    Finlizado
                   </Badge>
                </div>
                   <p>{description}</p>
                   <button className="btn-detalles2"
                   onClick={navegacion}
                   >
                    Mas detalles
                   </button>
               </Col>
               <Col className="infoA d-flex justify-content-center ">
                   <Row>
                       <Col className="d-flex flex-column">
                       <h3>ASPIRANTES</h3>
                       <h2>{aspirantes}</h2>
                       </Col>
                       <Col className="d-flex flex-column">
                       <h3>BECARIOS</h3>
                       <h2>{becarios}</h2>
                       </Col>
                   </Row>
               </Col>  
            </Row>   
            </Card.Text>
            
        </Card.Body>
    </Card>
    </>
  )
}
