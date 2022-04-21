import React from 'react'
import { Card } from 'react-bootstrap'

export const CardPeriodo = ({titulo,fechain,fechaFin,fechaEst}) => {
  return (
    <>
    <Card className="opcionesCards">
        <Card.Body className="  text-left mx-4" >
            <Card.Text className="d-flex flex-column nalign-items-start justify-content-between mb-3 text-start">
                <h3>{titulo}</h3>                
                <div className="d-flex">
                <p className="">Inicio | </p>
                    <p>{fechain}</p>
                </div>
                <div className="d-flex">
                <p className="">Finalizado | </p>
                    <p>{fechaFin}</p>
                </div>
                <div className="d-flex">
                    <p className="">Entrega | </p>
                    <p>{fechaEst}</p>
                </div>
                </Card.Text>
                
            </Card.Body>
    </Card>
    </>
  )
}
