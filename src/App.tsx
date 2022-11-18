import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Hooks/useTheme";
import RoutesApp from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import { RequestProvider } from "./Contexts/RequestCrm";

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <RequestProvider>
        <GlobalStyle />
        <ToastContainer />
        <RoutesApp />
      </RequestProvider>
    </ThemeProvider>
  );
};

export default App;
