import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { PalletContext } from "../../Contexts/Pallet/Pallet";
import { useHeader } from "../../Hooks/useHeader";
import { CloseMenu } from "../Header/styles";

import * as C from "./styles";

const Sidebar: React.FC = () => {
  const { cHome, cTable, getHome, getTable } = useContext(PalletContext);
  const { openMenuSidebar, wrapperMenu } = useHeader();
  const { logout } = useContext(AuthContext);

  return (
    <C.Container wrap={openMenuSidebar}>
      <C.ContentLogo>
        <h3>BAGAGGIO</h3>
        {openMenuSidebar && (
          <CloseMenu
            onClick={wrapperMenu}
            style={{
              color: "#FFF",
              position: "absolute",
              top: "20px",
              right: "5px",
            }}
          />
        )}
      </C.ContentLogo>
      <C.ContentNavArea>
        <nav>
          <ul>
            <Link
              to="/relatorio-vendas"
              onClick={getHome}
              className={cHome ? "active" : ""}
            >
              Relatório de Vendas
            </Link>
            <Link
              to="/vendas-flex"
              onClick={getTable}
              className={cTable ? "active" : ""}
            >
              Vendas Flex
            </Link>
          </ul>
        </nav>
      </C.ContentNavArea>
      <button onClick={() => logout()}>LOGOUT</button>
    </C.Container>
  );
};

export default Sidebar;
