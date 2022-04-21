import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import axios from "../../shared/plugins/Axios";
import { ButtonActivar } from "../buttons/ButtonActivar";
import { ButtonPdf } from "../buttons/ButtonPdf";

export const TableUsuarios = ({ title }) => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios({
      url: `/person/`,
      method: "GET",
    })
      .then((response) => {
        const {
          data: { data },
        } = response;
        setUsers(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  const columnas = [
    {
      name: "#",
      cell: (row, index) => <div>{index + 1}</div>,
    },
    {
      name: "Nombre(s)",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.emailInstitutional,
      sortable: true,
    },
    {
      name: "Celular",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Escuela",
      selector: (row) => row.scholl,
      sortable: true,
    },
    {
      name: "Matricula",
      selector: (row) => row.dni,
      sortable: true,
    },
    {
      name: "Rol",
      selector: (row) => row.postulation,
      sortable: true,
    },
    {
      name: "Curriculum",
      cell: (row) => (
        <>
          <ButtonPdf urlfile={row.cvFileUrl} />
        </>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        background: "#0368C0",
        color: "white",
      },
    },
    header: {
      style: {
        background: "#0368C0",
        color: "white",
        textAlign: "left",
      },
    },
  };
  const petitionOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorTex: "de",
  };

  return (
    <>
      <main className="mainStyle">
        <Container fluid>
          <Row className="my-5 mx-2">
            <Col md={12}>
              <DataTable
                columns={columnas}
                data={users}
                title={title}
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
  );
};
