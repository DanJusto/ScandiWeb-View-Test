import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Router } from "./router.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Router/>
      </ThemeProvider>
    </React.Fragment>,
);