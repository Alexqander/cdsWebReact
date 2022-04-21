import React from 'react'
import { Badge, Card, Col, Row } from 'react-bootstrap'

export const CardInfoProy = ({periodo,description,navegacion}) => {
  return (
   <>
    <Card className="infoConvoCard">
        <Card.Body className="text-left mx-4" >
            <Card.Text className=" d-flex flex-column align-items-between justify-content-between mb-3 text-start">
             <Row>
               <Col md={12} className="info d-flex flex-column py-5">
                <div className="d-flex mb-2">
                   <h3 className="me-3">{periodo}</h3>
                   <Badge pill bg="success">
                    Finlizado
                   </Badge>
                </div>
                <h4>Descripcion</h4>
                   <p>{description}</p>
               </Col>
            </Row>   
            </Card.Text>
            
        </Card.Body>
    </Card>
   </>
  )
}
