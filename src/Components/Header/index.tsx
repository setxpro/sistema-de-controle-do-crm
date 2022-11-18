import React, { useState, useContext } from "react";
import { useHeader } from "../../Hooks/useHeader";
import { useTheme } from "../../Hooks/useTheme";

import * as C from "./styles";
import { AuthContext } from "./../../Contexts/Auth/AuthContext";

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const { wrapperMenu, openMenuSidebar } = useHeader();

  const auth = useContext(AuthContext);

  const [isLogged] = useState(true);
  const [notify] = useState(1);

  return (
    <C.Container>
      <C.ContentLeft>
        <C.BarsMenu onClick={wrapperMenu} />
        <C.ContentBtnMobile>
          {openMenuSidebar ? (
            <C.CloseMenu onClick={wrapperMenu} />
          ) : (
            <C.BarsMenu onClick={wrapperMenu} />
          )}
        </C.ContentBtnMobile>
      </C.ContentLeft>
      <C.ContentRight>
        <C.ContentAreaNotify notify={notify}>
          {/* <div className='notification'>
                  <C.BellIcon/>
                </div> */}
        </C.ContentAreaNotify>

        <C.ContentAreaToggleTheme>
          {(theme.title === "light" && <C.Dark onClick={toggleTheme} />) ||
            (theme.title === "dark" && <C.Light onClick={toggleTheme} />)}
        </C.ContentAreaToggleTheme>

        <C.ContentAreaNameAndAvatar isLogged={isLogged}>
          <C.ContentNameArea>
            <h4>{auth.user?.name}</h4>
            <h6>{auth.user?.assignment}</h6>
          </C.ContentNameArea>
          <div className="avatar">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.uenWVayq55orO6Nt8Vii-AHaHa&pid=Api&P=0"
              alt="avatar"
            />
          </div>
        </C.ContentAreaNameAndAvatar>
      </C.ContentRight>
    </C.Container>
  );
};

export default Header;
