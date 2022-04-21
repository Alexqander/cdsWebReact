import React from 'react'
import { Card } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


export const InfoCard = (props) => {
    const {title , info , urlimages , activeButton, navrut} = props 
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate(navrut)
    }


  return (
    <>
    <Card className="cards-info " >
        <Card.Body className="d-flex align-items-center justify-content-between text-left mx-4" >
            <Card.Text className="mb-3 text-start">
                <h3>{title}</h3>
                <p>{info}</p>
                {activeButton!==false?(
                    <button className="btn-grad" onClick={handleClick} >IR</button>
                ):false}                
                </Card.Text>
            <Card.Img className="img-cards mx-5 img-responsive" src={urlimages}/>
            </Card.Body>
    </Card>

    </>
  )
}
