import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import '../../assets/css/CardsStyles.css'
import { useNavigate } from 'react-router-dom'

export const CardProyectos = (props) => {

    const{titulo,description, estado,navegacion} = props

  return (
    <>
    <Card className="proyectosCards">
        <Card.Body className=" d-flex align-items-start flex-column justify-content-start text-left mx-4" >
            <Card.Text className="mb-3 text-start mb-auto">
                <h3>{titulo}</h3>
                {
                    estado!==1?(
                        <>
                        <Badge pill bg="danger">
                         Terminado
                        </Badge>
                        </>
                    ):<Badge pill bg="warning">
                    Ejecucion
                    </Badge>
                }
                
                <p>{description}</p>
                </Card.Text>
                <button className="btn-detalles" onClick={navegacion}>Mas detalles</button>
            </Card.Body>
    </Card>
    </>
  )
}
