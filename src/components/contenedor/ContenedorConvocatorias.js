import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "../../shared/plugins/Axios";
import { CardConvocatoria } from "../cards/CardConvocatoria";

export const ContenedorConvocatorias = () => {
  const [convocatorias, setConvocatorias] = useState([]);
  const [aspirantes ,setAspirantes] = useState([]);
  const getConvocatorias = () => {
    axios({
      url: "/convocatorias/",
      method: "GET",
    })
      .then((response) => {
        const {
          data: {data} ,
        } = response;
        console.log(data);
        let i =0
        for( i in data){
            setAspirantes(data[i].persons.length);
        }
        setConvocatorias(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getConvocatorias();
  }, []);

  


  const navigate = useNavigate();
  const handleClick = (idConv) => {
    
  };

  return (
    <>
      <main className="mainStyle">
        <Container fluid className="px-4">
          <Row>
            {convocatorias.map((conv, i) => {
                return(
              <Col key={i} md={12}>
                <CardConvocatoria
                  periodo={conv.description}
                  description={`Fecha de Finalizacion ${conv.endDate}`}
                  navegacion={handleClick=>navigate(`/detalleConvocatoria/${conv.id}`)}
                  aspirantes={aspirantes.length}
                />
              </Col>)
            })}
          </Row>
        </Container>
      </main>
    </>
  );
};
