import React from 'react'
import {Card ,ProgressBar} from 'react-bootstrap'

export const CardProgres = ({titulo,progres}) => {
  return (
   <>
   <Card className="opcionesCards">
        <Card.Body className="  text-left mx-4" >
            <Card.Text className=" d-flex flex-colum nalign-items-start justify-content-between mb-3 text-start">
                <h3>{titulo}</h3>                
                </Card.Text>
                <div>
                <h3 className="text-start">
                {`${progres} %`}
                </h3>
                <ProgressBar now={progres} style={{borderRadius:15 , height:20,background:'white'}}/>
                </div>
            </Card.Body>
    </Card>
   </>
  )
}
