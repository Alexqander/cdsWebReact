import React from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import axios from "../../shared/plugins/Axios";
import * as Yup from "yup";
import Alert, {
  msjConfirmacion,
  msjError,
  msjExito,
  titleConfirmacion,
  titleError,
  titleExito,
} from "../../shared/plugins/Alert";
import { useNavigate } from "react-router-dom";

export const RegisterUser = () => {
  const navigate = useNavigate();

  const dataProyectoSchema = Yup.object().shape({
    name: Yup.string().required("campo obligatorio"),
    lastname: Yup.string().required("campo obligatorio"),
    motherslastname: Yup.string().required("campo obligatorio"),
    username: Yup.string()
      .email("correo invalido")
      .required("campo obligatorio"),
    confirmUser: Yup.string()
      .email()
      .required("campo obligatorio")
      .oneOf([Yup.ref("username"), null], "Los correos no coinciden"),
    password: Yup.string().required("campo obligatorio"),
    confirmPass: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "las contraseñas no coinciden"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          motherslastname: "",
          username: "",
          confirmUser: "",
          password: "",
          confirmPass: "",
        }}
        onSubmit={(Valores, { resetForm }) => {
          const { name, lastname, motherslastname, username, password } =
            Valores;
          const saveProject = (
            name,
            lastname,
            motherslastname,
            username,
            password
          ) => {
            Alert.fire({
              title: "Registrar Nuevo Proyecto",
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
                  url: "/user/",
                  method: "POST",
                  data: {
                    username: username,
                    password: password,
                    person: {
                      name: name,
                      lastname: lastname,
                      motherslastname: motherslastname,
                    },
                  },
                })
                  .then((response) => {
                    const user = { ...response.data.data };
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
                      return navigate("/panelUsuarios");
                    }
                  })
                  .catch((error) => {
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

          saveProject(name, lastname, motherslastname, username, password);
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
          <Form style={{ width: 1000 }} onSubmit={handleSubmit}>
            {/* campos de los nombres y apellidos*/}
            <Row>
              <Form.Group className="d-flex flex-column">
                <Form.Label className="text-start" style={{ color: "white" }}>
                  Nombre
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "65%", borderRadius: 35, border: "none" }}
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
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start" style={{ color: "white" }}>
                  Apellido Paterno
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="lastname"
                  id="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.lastname && errors.lastname && (
                  <div className="errors">
                    <p>{errors.lastname}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start" style={{ color: "white" }}>
                  Apellido Materno
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="motherslastname"
                  id="motherslastname"
                  value={values.motherslastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.motherslastname && errors.motherslastname && (
                  <div className="errors">
                    <p>{errors.motherslastname}</p>
                  </div>
                )}
              </Form.Group>
              <Col></Col>
            </Row>
            <Row>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start" style={{ color: "white" }}>
                  Correo
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="username"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.username && errors.username && (
                  <div className="errors">
                    <p>{errors.username}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start" style={{ color: "white" }}>
                  Confirmar Correo
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="confirmUser"
                  id="confirmUser"
                  value={values.confirmUser}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.confirmUser && errors.confirmUser && (
                  <div className="errors">
                    <p>{errors.confirmUser}</p>
                  </div>
                )}
              </Form.Group>
              <Col></Col>
            </Row>
            <Row>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start" style={{ color: "white" }}>
                  Contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <div className="errors">
                    <p>{errors.password}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start" style={{ color: "white" }}>
                  Confirmar Contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="confirmPass"
                  id="confirmPass"
                  value={values.confirmPass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.confirmPass && errors.confirmPass && (
                  <div className="errors">
                    <p>{errors.confirmPass}</p>
                  </div>
                )}
              </Form.Group>
              <Col></Col>
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
