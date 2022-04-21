import React from 'react'
import { Card } from 'react-bootstrap'
import '../../assets/css/CardsStyles.css'

export const CardOpciones = (props) => {

    const{titulo,urlImage,navRut} = props

  return (
    <>
    <Card className="opcionesCards">
        <Card.Body className=" d-flex align-items-start justify-content-between text-left mx-4" >
            <Card.Text className="mb-3 text-start">
                <h3>{titulo}</h3>                
                </Card.Text>
                <Card.Img className="imgOpciones mx-5 img-responsive" src={urlImage}/>
            </Card.Body>
    </Card>
</>
  )
}
