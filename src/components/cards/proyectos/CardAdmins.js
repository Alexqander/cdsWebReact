import React from 'react'
import { Card } from 'react-bootstrap'

export const CardAdmins = ({titulo,usuario}) => {
  return (
    <>
    <Card className="opcionesCards">
        <Card.Body className="  text-left mx-4" >
            <Card.Text className=" d-flex flex-colum nalign-items-start justify-content-between mb-3 text-start">
                <h3>{titulo}</h3>                
                </Card.Text>
                <div>
                    <p style={{fontSize:20}} className="text-start">{usuario}</p>
                </div>
            </Card.Body>
    </Card>
    </>
  )
}
