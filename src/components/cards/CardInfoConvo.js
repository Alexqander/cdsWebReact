import React from 'react'
import { Card } from 'react-bootstrap'

export const CardInfoConvo = (props) => {
    const {titulo,info} = props
    return (
    <>    
    <Card className="opcionesCards">
        <Card.Body className="text-left mx-4" >
            <Card.Text className=" d-flex flex-column align-items-start justify-content-between mb-3 text-start">
                <h2 className="mb-4">{titulo}</h2>
                <h4 style={{fontSize:25}}>{info}</h4>
                </Card.Text>
            </Card.Body>
    </Card>

    </>
  )
}
