import { Formik } from 'formik'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup';


const dataPersonSchema = Yup.object().shape({
  name: Yup.string().required('por favor ingresa un nombre'),
  lastname:Yup.string().required('por favor ingresa un apellido'),
  motherslastname:Yup.string().required('por favor ingresa un apellido'),
  emailInstitutional:Yup.string().email('correo electronico invalido').required('por favor ingresa un nombre'),
  email:Yup.string().email('correo electronico invalido').required('por favor ingresa un nombre'),
  cellphone:Yup.string().max(10,'numero de telefono mayor a 10 numeros').required('por favor ingresa un celular'),
  phone:Yup.string().max(10,'numero de telefono mayor a 10 numeros').required('por favor ingresa un telefoo'),
  dni:Yup.string().required('por favor ingresa una matricula'),
  scholl:Yup.string().required('por favor ingresa una escuela'),
  postulation:Yup.string().required('por favor ingresa una postulacion'),
  street:Yup.string().required('por favor ingresa una calle'),
  extNumber:Yup.string().required('campo obligatorio'),
  intNumber:Yup.string().required('campo obligatorio'),
  postalCode:Yup.string().max(10,'numero de telefono mayor a 10 numeros').required('por favor ingresa un nombre'),
  colonia:Yup.string().required('por favor ingresa una colonia'),
  estate:Yup.string().required('por favor ingresa un estado'),
  town:Yup.string().required('por favor ingresa una ciudad'),
})
export const RegisterForm = ({ navrut }) => {
  const navigate = useNavigate();

  const atrasClick = () => {
    navigate("/convocatorias");
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          motherslastname: "",
          emailInstitutional: "",
          email: "",
          cellphone: "",
          phone: "",
          dni: "",
          scholl: "",
          postulation: "",
          street: "",
          extNumber: "",
          intNumber: "",
          postalCode: "",
          colonia: "",
          estate: "",
          town: "",
        }}
        onSubmit={(persona, { resetForm }) => {
          console.log(persona);
          console.log("formulario enviado");
          window.localStorage.setItem("person", JSON.stringify(persona));
          navigate("/registerupload");
          resetForm();
        }}
        validationSchema={dataPersonSchema}
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
                <Form.Label className="text-start">Nombre(s)</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "80%", borderRadius: 35, border: "none" }}
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
                <Form.Label className="text-start">Apellido Paterno</Form.Label>
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
                    <p>{errors.name}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Apellido Materno</Form.Label>
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
            </Row>
            {/* campos de los emails*/}
            <Row className="mt-3">
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">
                  Email Institucional
                </Form.Label>
                <Form.Control
                  type="email"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="emailInstitutional"
                  id="emailInstitutional"
                  value={values.emailInstitutional}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.emailInstitutional && errors.emailInstitutional && (
                  <div className="errors">
                    <p>{errors.emailInstitutional}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Email Personal</Form.Label>
                <Form.Control
                  type="email"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <div className="errors">
                    <p>{errors.email}</p>
                  </div>
                )}
              </Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Celular</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="cellphone"
                  id="cellphone"
                  value={values.cellphone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.cellphone && errors.cellphone && (
                  <div className="errors">
                    <p>{errors.cellphone}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Telefono</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.phone && errors.phone && (
                  <div className="errors">
                    <p>{errors.phone}</p>
                  </div>
                )}
              </Form.Group>
            </Row>
            {/* campos dela matricula y la escuela*/}
            <Row className="mt-3">
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Matricula</Form.Label>
                <Form.Control
                  type="text"
                  style={{ borderRadius: 35, border: "none" }}
                  name="dni"
                  id="dni"
                  value={values.dni}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.dni && errors.dni && (
                  <div className="errors">
                    <p>{errors.dni}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Escuela</Form.Label>
                <Form.Control
                  type="text"
                  style={{ borderRadius: 35, border: "none" }}
                  name="scholl"
                  id="scholl"
                  value={values.scholl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.scholl && errors.scholl && (
                  <div className="errors">
                    <p>{errors.scholl}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Postulacion</Form.Label>
                <Form.Control
                  type="text"
                  style={{ borderRadius: 35, border: "none" }}
                  name="postulation"
                  id="postulation"
                  value={values.postulation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.postulation && errors.postulation && (
                  <div className="errors">
                    <p>{errors.postulation}</p>
                  </div>
                )}
              </Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Calle</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "100%", borderRadius: 35, border: "none" }}
                  name="street"
                  id="street"
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.street && errors.street && (
                  <div className="errors">
                    <p>{errors.street}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">No Exterior</Form.Label>
                <Form.Control
                  type="number"
                  style={{ width: "40%", borderRadius: 35, border: "none" }}
                  name="extNumber"
                  id="extNumber"
                  value={values.extNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.extNumber && errors.extNumber && (
                  <div className="errors">
                    <p>{errors.extNumber}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">No Interior</Form.Label>
                <Form.Control
                  type="number"
                  style={{ width: "40%", borderRadius: 35, border: "none" }}
                  name="intNumber"
                  id="intNumber"
                  value={values.intNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.intNumber && errors.intNumber && (
                  <div className="errors">
                    <p>{errors.intNumber}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">C.P</Form.Label>
                <Form.Control
                  type="number"
                  style={{ width: "40%", borderRadius: 35, border: "none" }}
                  name="postalCode"
                  id="postalCode"
                  value={values.postalCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.postalCode && errors.postalCode && (
                  <div className="errors">
                    <p>{errors.postalCode}</p>
                  </div>
                )}
              </Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Colonia</Form.Label>
                <Form.Control
                  type="text"
                  style={{ borderRadius: 35, border: "none" }}
                  name="colonia"
                  id="colonia"
                  value={values.colonia}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.colonia && errors.colonia && (
                  <div className="errors">
                    <p>{errors.colonia}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Estado</Form.Label>
                <Form.Control
                  type="text"
                  style={{ borderRadius: 35, border: "none" }}
                  name="estate"
                  id="estate"
                  value={values.estate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.estate && errors.estate && (
                  <div className="errors">
                    <p>{errors.estate}</p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="d-flex flex-column">
                <Form.Label className="text-start">Municipio</Form.Label>
                <Form.Control
                  type="text"
                  style={{ borderRadius: 35, border: "none" }}
                  name="town"
                  id="town"
                  value={values.town}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.town && errors.town && (
                  <div className="errors">
                    <p>{errors.town}</p>
                  </div>
                )}
              </Form.Group>
            </Row>
            <Row className="mt-5">
              <Col className="d-flex justify-content-end">
                <Button className="btn-grad3" onClick={atrasClick}>
                  Atras
                </Button>
                <Button className="btn-regi" type="submit">
                  Siguiente
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};
