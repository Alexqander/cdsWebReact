import React, { useEffect, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "../../shared/plugins/Axios";

export const UploadFileForm = ({ navrut }) => {
  const navigate = useNavigate();

  const atrasClick = () => {
    navigate("/register");
  };
  const [archivo, setArchivo] = useState();
  const subirArchivo = (e) => {
    setArchivo(e.target.files[0]);
  };
  const subirDocumento = async () => {
    const formdata = new FormData();
    formdata.append("file", archivo);
    await axios({
      url: "/assets/upload",
      method: "POST",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        const {
          data: { url },
        } = response;
        window.localStorage.setItem("urlfile",JSON.stringify(url));
      })
      .catch((error) => {
        console.log(error);
      });
    const envairPerson = () => {
      const personsaved = window.localStorage.getItem("person");
      const personvalue = JSON.parse(personsaved);
      const {
        name,
        lastname,
        motherslastname,
        email,
        emailInstitutional,
        phone,
        cellphone,
        dni,
        postulation,
        scholl,
        colonia,
        estate,
        extNumber,
        intNumber,
        postalCode,
        street,
        town,
      } = personvalue;
      const convocatoriasaved = window.localStorage.getItem("convocatoria");
      const convocatoriavalue = JSON.parse(convocatoriasaved);
      const {
        0: { description, endDate, id, startDate, status },
      } = convocatoriavalue;
      const urlfile = window.localStorage.getItem("urlfile")
      const urlfilevalue = JSON.parse(urlfile)

      const convocatoria = {
        admission: {
          description: description,
          endDate: endDate,
          id: id,
          startDate: startDate,
          status: { description: status.description, id: status.id },
        },
      };

      const person = {
        name: name,
        lastname: lastname,
        motherslastname: motherslastname,
        email: email,
        emailInstitutional: emailInstitutional,
        phone: phone,
        cellphone: cellphone,
        dni: dni,
        postulation: postulation,
        scholl: scholl,
        cvFileUrl: urlfilevalue,
      };

      const direccion = {
        colonia: colonia,
        estate: estate,
        extNumber: extNumber,
        intNumber: intNumber,
        postalCode: postalCode,
        street: street,
        town: town,
      };
      const personRegister = {
        ...person,
        address: { ...direccion },
        ...convocatoria,
      };

       axios({
         url: "/person/",
         method: "POST",
         data: personRegister,
       })
         .then((repsonse) => {
           console.log(repsonse);
         })
         .catch((error) => {
           console.log(error);
         });
     };
    envairPerson();

    navigate(navrut);
  };

  return (
    <>
      <div className="box px-5">
        <h2 className="header mb-5">Sube tus archivos</h2>
        <form>
          <Form.Group controlId="formFileMultiple" className="my-3">
            <Form.Control type="file" name="File" onChange={subirArchivo} />
          </Form.Group>
          <Row className="mt-5">
            <Col className="d-flex justify-content-end">
              <Button className="btn-grad3" onClick={atrasClick}>
                Atras
              </Button>
              <Button className="btn-regi" onClick={() => subirDocumento()}>
                Siguiente
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    </>
  );
};
