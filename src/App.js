import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { primary } from "./themes/themes";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={primary}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Switch>
              <Header />
              <Route path="/home">
                <p>HOME - Shop under construction</p>
              </Route>
            </Switch>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
