import React from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import '../assets/css/PublicStyles.css' ;


export const NavPublico = () => {
  return (
    <>
  <Navbar className='navBackground p-0' variant="light">
    <Container fluid className='d-flex justify-content-between align-items-center'>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="https://cdsfilesbucket.s3.us-east-2.amazonaws.com/451e4bdf-1dfb-4242-9958-faa904479b3d.png."
                    width="115"
                    height="115"
                    className="rounded float-start"
                    />
                </Navbar.Brand>
                <Nav className="">
                    <Link to={"/home"}><p className="menu mx-5" >Inicio</p></Link>
                    <Link to={"/convocatorias"}><p className="menu mx-5" >Convocatorias</p></Link>
                    <Link to={"/login"}><p className="menu mx-5" >Iniciar Sesíon</p></Link>
                </Nav>
    </Container>
  </Navbar>
</>
  )
}



































