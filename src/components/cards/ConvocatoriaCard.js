import React from 'react'
import { Card } from 'react-bootstrap'

import {useNavigate} from 'react-router-dom'
import { SocialLinks } from '../social/SocialLinks'

export const ConvocatoriaCard = (props) => {
    const{ title,info, buttons ,urlimages, navrut,linksActive,rutRegister} = props
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate(navrut)
    }
    const handleClick1 =()=>{
        navigate(rutRegister)
    }
  return (
    <> 
    <Card className="cards-convo " >
        <Card.Body className="d-flex align-items-center justify-content-between text-left mx-4" >
            <Card.Text className="mb-3 text-start">
                <h3 className="mb-5 titulo-convo">{title}</h3>
                <p className="mb-5 info-convo">{info}</p>
                    {linksActive!==false?(
                        <>
                        <div className="mb-3 text-start">
                        <SocialLinks/>
                        </div>
                        </>
                    ):<div className="mb-3 text-start"></div>}
                {buttons!==false?(
                    <>
                    <div className="d-flex mt-5">
                    <button className="btn-grad" onClick={handleClick} >Regresar</button>
                    <button className="btn-grad2" onClick={handleClick1} >Registrar</button>
                    </div>
                    
                    </>
                ):<button className="btn-grad mt-5" onClick={handleClick} >Regresar</button>}                
                </Card.Text>
            <Card.Img className="img-convo mx-5 img-responsive" src={urlimages}/>
            </Card.Body>
    </Card>
    </>
  )
}
          