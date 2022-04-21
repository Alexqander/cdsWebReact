import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "../../shared/plugins/Axios";
import { useAuth } from "../../hooks/useAuth";

export const LoginForm = () => {
  const expregCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const navigate = useNavigate();
  const auth = useAuth();
    
 

  return (
    <>
      <div className="mt-5">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validate={(valores) => {
            let errores = {};
            //validacion de email
            if (!valores.username) {
              errores.username = "Por Favor Ingresa un correo";
            } else if (!expregCorreo.test(valores.username)) {
              errores.username =
                "El correo solo puede contener letras ,numeros,puntos,guiones y guion bajo.";
            }
            //validacion de contraseña
            if (!valores.password) {
              errores.password = "Por Favor Ingresa una contraseña";
            }
            return errores;
          }}
          onSubmit={(Valores, { resetForm }) => {
            const { username, password } = Valores;
             const login = async (username, password) => {
               await axios({
                 url: "/auth/login",
                 method: "POST",
                 data: { username: username, password: password },
               })
                 .then((response) => {
                  const user = {...response.data.data}
                   console.log(user);
                   auth.login(user);
                   navigate("/panelPrincipal");
                 })
                 .catch((error) => {
                   console.log(error);
                 });
             };

            login(username, password);
            

            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
            <>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="" style={{ marginBottom: 30 }}>
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    style={{ borderRadius: 37, border: "none" }}
                    type="email"
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
                <Form.Group className="my-4">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    style={{ borderRadius: 37, border: "none" }}
                    type="password"
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
                <div className="d-flex flex-column">
                  <div className="my-3">
                    <a>Recuperar contraseña</a>
                  </div>
                  <Button className="btn-log" type="submit">
                    Ingresar
                  </Button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};
