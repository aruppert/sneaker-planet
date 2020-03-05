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
import EmptyingWarning from "./components/EmptyingWarning";
import OrderPage from "./pages/OrderPage";

function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [contentCart, setContentCart] = React.useState([]);
  const [cartAnimation, setCartAnimation] = React.useState(false);
  const [showEmptyingWarning, setShowEmptyingWarning] = React.useState(false);

  return (
    <>
      <ThemeProvider theme={primary}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route>
              <Header
                cartAnimation={cartAnimation}
                toggleCart={() => setShowCart(!showCart)}
              />
              {showCart && (
                <ShoppingCart
                  contentCart={contentCart}
                  onChangeCart={newCart => setContentCart(newCart)}
                  onChangeEmptyingWarning={() =>
                    setShowEmptyingWarning(!showEmptyingWarning)
                  }
                />
              )}
              {showEmptyingWarning && (
                <EmptyingWarning
                  contentCart={contentCart}
                  onChangeEmptyingWarning={() =>
                    setShowEmptyingWarning(!showEmptyingWarning)
                  }
                  onChangeCart={emptyCart => setContentCart(emptyCart)}
                  toggleCart={() => setShowCart(!showCart)}
                />
              )}
              <Switch>
                <Route path="/shop">
                  <ShopPage
                    cartAnimation={cartAnimation}
                    onChangeCartAnimation={bool => setCartAnimation(bool)}
                    onChangeCart={item =>
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
                <Route path="/order">
                  <OrderPage />
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
