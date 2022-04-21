import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from "../pages/log/LoginPage";
import { ConvocatoriasPage } from "../pages/home/ConvocatoriasPage";
import { RegisterPage } from "../pages/Register/RegisterPage";
import { RegisterPageUpload } from "../pages/Register/RegisterPageUpload";
import { FinalRegisterPage } from "../pages/Register/FinalRegisterPage";
import { PanelPrincipal } from "../pages/Admin/PanelPrincipal";
import { PanelUsuarios } from "../pages/Admin/PanelUsuarios";
import { PanelProyectos } from "../pages/Admin/PanelProyectos";
import { PanelConvocatorias } from "../pages/Admin/PanelConvocatorias";
import { PanelConfiguracion } from "../pages/Admin/PanelConfiguracion";
import { DetalleProyecto } from "../pages/Admin/proyectos/DetalleProyecto";
import { DetalleConvocatoria } from "../pages/Admin/convocatorias/DetalleConvocatoria";
import { RequireAuth } from "../auth/RequireAuth.tsx";
import { NuevoProyecto } from "../pages/Admin/proyectos/NuevoProyecto";
import { NuevoUsuario } from "../pages/Admin/users/NuevoUsuario";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/convocatorias" element={<ConvocatoriasPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registerupload" element={<RegisterPageUpload />} />
        <Route path="/registerfinal" element={<FinalRegisterPage />} />
        <Route
          path="/panelPrincipal"
          element={
            <RequireAuth>
              <PanelPrincipal />
            </RequireAuth>
          }
        />
        <Route
          path="/panelUsuarios"
          element={
            <RequireAuth>
              <PanelUsuarios />
            </RequireAuth>
          }
        />
        <Route
          path="/panelProyectos"
          element={
            <RequireAuth>
              <PanelProyectos />
            </RequireAuth>
          }
        />
        <Route
          path="/panelConvocatorias"
          element={
            <RequireAuth>
              <PanelConvocatorias />
            </RequireAuth>
          }
        />
        <Route
          path="/panelConfiguracion"
          element={
            <RequireAuth>
              <PanelConfiguracion />
            </RequireAuth>
          }
        />
        <Route
          path="/detalleProyecto"
          element={
            <RequireAuth>
              <DetalleProyecto />
            </RequireAuth>
          }
        />
        <Route
          path="/detalleConvocatoria/:id"
          element={
            <RequireAuth>
              <DetalleConvocatoria />
            </RequireAuth>
          }
        />
        <Route
          path="/nuevoProyecto"
          element={
            <RequireAuth>
              <NuevoProyecto/>
            </RequireAuth>
          }
        />
        <Route
          path="/nuevoUsuario"
          element={
            <RequireAuth>
              <NuevoUsuario/>
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
};
