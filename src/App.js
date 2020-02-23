import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { primary } from "./themes/themes";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import ShopPage from "./pages/ShopPage";
import Footer from "./components/Footer";

function App() {
  const [genderFilter, setGenderFilter] = React.useState("unisex");
  const [filterOn, setFilterOn] = React.useState(false);

  return (
    <>
      <ThemeProvider theme={primary}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route>
              <Header
                onFilterChange={gender => setGenderFilter(gender)}
                onActivateFilter={bool => setFilterOn(bool)}
              />
              <Switch>
                <Route path="/shop">
                  <ShopPage genderFilter={genderFilter} filterOn={filterOn} />
                </Route>
              </Switch>
              <Footer />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
