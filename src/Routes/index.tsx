import React from "react";
import { Route, Routes } from "react-router-dom";
import Template from "../Components/Template";
import CreateUser from "../Screens/CreateAccount";
import SignIn from "../Screens/Login/Login";
import RelatorioDeVendas from "../Screens/RelatorioDeVendas";
import VendasDoFlex from "../Screens/VendasDoFlex";
import SecurityRoutes from "../Security";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/signin" element={<SignIn />} />

      <Route
        path="/"
        element={
          <SecurityRoutes>
            <Template>
              <RelatorioDeVendas />
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/relatorio-vendas"
        element={
          <SecurityRoutes>
            <Template>
              <RelatorioDeVendas />
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/vendas-flex"
        element={
          <SecurityRoutes>
            <Template>
              <VendasDoFlex />
            </Template>
          </SecurityRoutes>
        }
      />
    </Routes>
  );
};

export default RoutesApp;
