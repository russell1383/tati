import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, createContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "styled-components";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import GlobalStyle from "./constants/global-styles";
import themes from "./constants/theme";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import Products from "./pages/Products.page";
import Home from "./pages/Home.page";
import ProductInfo from "./pages/ProductInfo.page";
import Checkout from "./pages/Checkout.page";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SignIn from "./pages/SignIn.page";
import SignUp from "./pages/SignUp.page";
import Cart from "./pages/Cart.page";
import AboutUs from "./pages/AboutUs.page";
import ContactUs from "./pages/ContactUs.page";
import SwitchButton from "./components/SwitchButton/SwitchButton.component";
import PrivacyStatement from "./pages/PrivacyStatement.page";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.component";
import Account from "./pages/Account.page";
import CookiePolicy from "./pages/CookiePolicy.page";
import Loading from "./components/Lodading/Loading.component";
import NotFoundComponent from "./components/NotFound/NotFound.component";
import OrderPlaced from "./pages/OrderPlaced.page";
import PhoneOtpVerification from "./components/SignIn/PhoneOtpVerification";
import AuthProvider from "./components/Context/AuthProvider/AuthProvider";

import LoginDashBoard from "./components/Navbar/LoginDashBoard";
import SignInComponentsModel from "./components/SignIn/SignInComponentsModel";
import LoginModal from "./components/SignIn/LoginModal";

// export const UserContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  // const [loggedInUser, setLoggedInUser] = useState({});
  // const [cartProducts, setCartProducts] = useState([]);
  // const [userOrder, setUserOrder] = useState({});

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <ReactNotification />
        {/* <UserContext.Provider
          value={{
            user: [loggedInUser, setLoggedInUser],
            products: [cartProducts, setCartProducts],
            order: [userOrder, setUserOrder],
            allContext,
            // context :[allContext, setAllContext]

          }
          }
        > */}
        <AuthProvider>
          <Router>
            <ScrollToTop>
              <SwitchButton themeState={[theme, setTheme]} />
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/home" component={Home} />

                <Route
                  path="/products/:categoryName/:categoryType/:categoryId"
                  component={Products}
                />
                <Route path="/products/all-products" component={Products} />
                <Route path="/order-placed" component={OrderPlaced} />
                <Route
                  exact
                  path="/product-info/:productId"
                  component={ProductInfo}
                />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/sign-in" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/contact-us" component={ContactUs} />
                <Route exact path="/phoneOtp" component={PhoneOtpVerification} />
                <Route path="/loginDashBoard">
                  <LoginDashBoard></LoginDashBoard>
                </Route>
                <PrivateRoute exact path="/account">
                  <Account />
                </PrivateRoute>
                <PrivateRoute exact path="/checkout">
                  <Checkout />
                </PrivateRoute>
                <Route exact path="/login">
                  <SignInComponentsModel/>
                </Route>
                <Route
                  exact
                  path="/privacy-statement"
                  component={PrivacyStatement}
                />
                <Route exact path="/test" component={Loading} />
                <Route exact path="/cookie-policy" component={CookiePolicy} />
                <Route exact path="/loginModal" component={LoginModal} />
                <Route exact path="*" component={NotFoundComponent} />
              </Switch>
              <Footer />
            </ScrollToTop>
          </Router>
          </AuthProvider>
        {/* </UserContext.Provider> */}
      </ThemeProvider>
    </>
  );
}

export default App;
