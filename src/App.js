import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { primary } from "./themes/themes";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import ShopPage from "./pages/ShopPage";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShoppingCart from "./components/ShoppingCart";
import ContactPage from "./pages/ContactPage";

function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [contentCart, setContentCart] = React.useState([]);

  return (
    <>
      <ThemeProvider theme={primary}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route>
              <Header toggleCart={() => setShowCart(!showCart)} />
              {showCart && (
                <ShoppingCart
                  contentCart={contentCart}
                  onCartChange={newCart => setContentCart(newCart)}
                />
              )}
              <Switch>
                <Route path="/shop">
                  <ShopPage
                    onCartChange={item =>
                      setContentCart(contentCart.concat(item))
                    }
                    contentCart={contentCart}
                  />
                </Route>
                <Route path="/home">
                  <HomePage />
                </Route>
                <Route path="/contact">
                  <ContactPage />
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
