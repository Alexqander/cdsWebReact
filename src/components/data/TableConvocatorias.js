import React , { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import axios from '../../shared/plugins/Axios';
import { ButtonActivar } from '../buttons/ButtonActivar';
import { ButtonPdf } from '../buttons/ButtonPdf';
import Alert, {
    msjConfirmacion,
    msjError,
    msjExito,
    titleConfirmacion,
    titleError,
    titleExito,
  } from '../../shared/plugins/Alert'
import { useNavigate } from 'react-router-dom';


export const TableConvocatorias = ({idConvocatoria}) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [aspirantes,setAspirantes] = useState([])
    const columnas =[
        {
            name: "#",
            cell: (row, index) => <div>{index + 1}</div>,
          },
        {
            name:'Nombre(s)',
            selector:row => row.name,
            sortable: true,
        },
        {
            name:'Email',
            selector:row=>row.email,
            sortable: true,
        },
        {
            name:'Celular',
            selector:row=>row.phone,
            sortable: true,
        },
        {
            name:'Escuela',
            selector:row=>row.scholl,
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
                urlfile={row.cvFileUrl}
                />
                </>)
        },
        {
            name:'Cuenta',
            cell:row=>(<>
            <ButtonActivar
            funcion={() => activateUser(row.id)}
            status={row.status}
            />
            </>)
        }
    ]

    const activateUser = (idper)=>{
        
        Alert.fire({
            title: titleConfirmacion,
            text: msjConfirmacion,
            icon: "warning",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "",
            reverseButtons: true,
            backdrop: true,
            showLoaderOnConfirm: true,
            allowOutsideClick: !Alert.isLoading,
            preConfirm:()=>{
                return axios({
                    url: `/user/${idper}/cr`,
                    method: "POST",
                  })
                    .then((response) => {
                        if(!response.error){
                            const {
                                data: {data} ,
                              } = response;
                              console.log(data);
                              Alert.fire({
                                title: titleExito,
                                text: msjExito,
                                icon: "success",
                                confirmButtonText: "Aceptar",
                                confirmButtonColor: "",
                              });
                            }
                            return ()=>navigate(`/detalleConvocatoria/${idConvocatoria}`);  
                        }
                      )
                    .catch((error) => {
                        Alert.fire({
                            title: titleError,
                            text: msjError,
                            icon: "error",
                            confirmButtonText: "Aceptar",
                            confirmButtonColor: "",
                          });
                    });
                   
                  
            }
        })
    }

    
    const getPersons = () =>{
        axios({
            url: `/convocatorias/${idConvocatoria}/persons`,
            method: 'GET',
        })
        .then((response) => {
            const {
              data: { data },
            } = response;
            setAspirantes(data);
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
    };

    useEffect(() => {
        getPersons();
      }, []);

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
                    data={aspirantes}
                    title="Aspirantes"
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
