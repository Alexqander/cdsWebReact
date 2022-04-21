import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { ButtonActivar } from '../buttons/ButtonActivar'
import { ButtonPdf } from '../buttons/ButtonPdf'

export const TableIntegrantes = () => {

  const columnas =[
    {
        name: "#",
        cell: (row, index) => <div>{index + 1}</div>,
      },
    {
        name:'Nombre(s)',
        selector:row => row.nombre,
        sortable: true,
    },
    {
        name:'Email',
        selector:row=>row.email,
        sortable: true,
    },
    {
        name:'Celular',
        selector:row=>row.cel,
        sortable: true,
    },
    {
        name:'Escuela',
        selector:row=>row.escuela,
        sortable: true,
    },
    {
        name:'Matricula',
        selector:row=>row.dni,
        sortable: true,
    },
    {
        name:'Curriculum',
        cell:row=>(<>
            <ButtonPdf
            />
            </>)
    },
    {
        name:'Cuenta',
        cell:row=>(<>
        <ButtonActivar
        accion={1}
        />
        </>)
    }
]

const data = [
    {nombre:'Emmanuel Alexander Machado',email:'alexuandermacha@gmail.com',cel:'7772369685',escuela:'Utez',dni:'20203tn031',cv:'visualizar',acciones:'Activar'},
    {nombre:'Cristian Machado Ambrocio',email:'cristian@gmail.com',cel:'7773695877',escuela:'Upemor',dni:'20203tn032',cv:'visualizar',acciones:'Activar'},
    {nombre:'Alberto Gomez Camacho',email:'alberto.com',cel:'7776589234',escuela:'Unam',dni:'20203tn033',cv:'visualizar',acciones:'Activar'},
    {nombre:'Jesus Guadalupe Moreno',email:'jesus@gmail.com',cel:'7775109856',escuela:'Upicsa',dni:'20203tn034',cv:'visualizar',acciones:'Activar'},
    {nombre:'Juan Gomez Perez',email:'juan@gmail.com',cel:'7773210948',escuela:'Utez',dni:'20203tn035',cv:'visualizar',acciones:'Activar'},
]

const customStyles = {
    rows:{
        style:{
            background:'#0368C0',
            color:'white',
        }
    },
    header:{
        style:{
            background:'#0368C0',
            color:'white',
            textAlign:'left',
        }
    }
}
const petitionOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorTex: "de",
  }


  return (
    <>
        <main className="mainStyle">
        <Container fluid>
            <Row className="my-5 mx-2" >
                <Col md={12}>
                    <DataTable
                    columns={columnas}
                    data={data}
                    title="Integrantes"
                    pagination
                    paginationComponentOptions={petitionOptions}
                    responsive={true}
                    pointerOnHover={true}
                    customStyles={customStyles}
                    />
                </Col>
            </Row>

        </Container>
    </main>
    </>
  )
}
