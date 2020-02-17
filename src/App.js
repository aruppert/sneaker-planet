import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { primary } from "./themes/themes";

function App() {
  return (
    <>
      <ThemeProvider theme={primary}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route path="/home">
              <img src="./logo192.png" alt="Sneaker Planet Shop Logo" />
              <p>Sneaker Planet Shop Prototype with Bootstrap</p>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
