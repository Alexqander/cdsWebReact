import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/css/PublicStyles.css";
import axios from "../../shared/plugins/Axios";
import Alert, {
  msjConfirmacion,
  msjError,
  msjExito,
  titleConfirmacion,
  titleError,
  titleExito,
} from "../../shared/plugins/Alert";
import { useNavigate } from "react-router-dom";

export const RegisterProyect = () => {
  const navigate = useNavigate();
  const dataProyectoSchema = Yup.object().shape({
    name: Yup.string().required("por favor ingresa un nombre"),
    description: Yup.string().required("por favor ingresa una descripcion"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        onSubmit={(Valores, { resetForm }) => {
          const { name, description } = Valores;
          const saveProject = (name, description) => {
            Alert.fire({
              title: "Registrar Nuevo Usuario",
              text: "¿Estas seguro de guardar los cambios?",
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
              preConfirm: () => {
                return axios({
                  url: "/proyectos/",
                  method: "POST",
                  data: { name: name, description: description },
                })
                  .then((response) => {
                    const proyect = { ...response.data.data };
                    console.log(proyect);
                    if (!response.error) {
                      const {
                        data: { data },
                      } = response;
                      console.log(data);
                      Alert.fire({
                        title: titleExito,
                        text: msjExito,
                        icon: "success",
                        confirmButtonText: "Aceptar",
                        confirmButtonColor: "",
                      });
                      return navigate("/panelProyectos");
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    Alert.fire({
                      title: "Ah Ocurrido un error",
                      text: "error al procesar su solicitud intentelo mas tarde",
                      icon: "error",
                      confirmButtonText: "Aceptar",
                      confirmButtonColor: "",
                    });
                  });
              },
            });
          };

          saveProject(name, description);
        }}
        validationSchema={dataProyectoSchema}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit}>
            {/* campos de los nombres y apellidos*/}
            <Row>
              <Form.Group className="d-flex flex-column">
                <Form.Label className="text-start" style={{ color: "white" }}>
                  Nombre
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "50%", borderRadius: 35, border: "none" }}
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name && (
                  <div className="errors">
                    <p>{errors.name}</p>
                  </div>
                )}
              </Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group className="d-flex flex-column">
                <Form.Label className="text-start" style={{ color: "white" }}>
                  Descripcion del Proyecto
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "50%", borderRadius: 35, border: "none" }}
                  name="description"
                  id="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.description && errors.description && (
                  <div className="errors">
                    <p>{errors.description}</p>
                  </div>
                )}
              </Form.Group>
            </Row>

            <Row className="mt-5">
              <Col className="d-flex justify-content-start">
                <button
                  className="btn-grad3"
                  onClick={() => console.log("hola")}
                >
                  Atras
                </button>
                <button className="btn-regi" type="submit">
                  Siguiente
                </button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};
