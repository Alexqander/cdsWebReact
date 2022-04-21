import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Alert, {
  msjError,
  msjExito,
  titleError,
  titleExito,
} from "../../shared/plugins/Alert";
import axios from "../../shared/plugins/Axios";
import { ButtonAgregar } from "../buttons/ButtonAgregar";
import { CardProyectos } from "../cards/CardProyectos";
import { RegisterProyect } from "../forms/RegisterProyect";

export const ContenedorProyec = () => {
  const navigate = useNavigate();

  const [proyectos, setProyectos] = useState([]);
  const getProyectos = () => {
    axios({
      url: "/proyectos/",
      method: "GET",
    })
      .then((response) => {
        const {
          data: { data },
        } = response;
        console.log(data);
        setProyectos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProyectos();
  }, []);

  return (
    <>
      <main className="mainStyle">
        <Container fluid className="px-4">
          <Row>
            <Col>
              <ButtonAgregar
                funcion={() => navigate("/nuevoProyecto")}
              ></ButtonAgregar>
            </Col>
          </Row>
          <Row>
            {proyectos.map((proy, i) => {
              return (
                <Col key={i} md={3}>
                  <CardProyectos
                    titulo={proy.name}
                    description={proy.description}
                    estado={1}
                    navegacion={() => navigate("/detalleProyecto")}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    </>
  );
};
