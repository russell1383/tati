import React, { useContext, useState } from "react";
import { Container } from "../../constants/container";
import { useTheme } from "styled-components";
import {
  NavBarContainer,
  NavBarContainerWrap,
  NavbarIconsContainer,
  NavItemsContainer,
} from "./Navbar.style";
import secondaryLogo from "../../assets/logos/logo-secondary.svg";
import primaryLogo from "../../assets/logos/logo-primary.svg";
import Logo from "../../assets/logos/Tatilogo.png"
import SearchBar from "../SearchBar/SearchBar.component";
import ShopCategories from "../ShopCategories/ShopCategories.component";
import CartSidebar from "../CartSidebar/CartSidebar.component";
import { useHistory, useLocation } from "react-router";
import {
  faBars,
  faSearch,
  faShoppingBag,
  faUser,
  personIcon
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menubar from "../Menubar/Menubar.component";
import useWindowDimensions from "../../utils/windowDimentions";
import useAuth from "../../hooks/useAuth";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginDashBoard from "./LoginDashBoard";
import SignInComponentsModel from "../SignIn/SignInComponentsModel";
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const Navbar = () => {
  // const { user, products } = useContext(UserContext);
  const { user, products, logOut } = useAuth();
  const [loggedInUser, setLoggedInUser] = user;
  const [cartProducts, setCartProducts] = products;
  const history = useHistory();
  const { pathname } = useLocation();
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [shopCategoriesOpen, setShopCategoriesOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarState] = useState(false);
  const [mobileMenubar, setMobileMenubar] = useState(false);
  const { height, width } = useWindowDimensions();
  const theme = useTheme();

  // login part 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
    };
// login using google and facebook
   const [openBooking, setBookingOpen] = React.useState(false);
   const handleBookingOpen = () => setBookingOpen(true);
   const handleBookingClose = () => setBookingOpen(false);
  // const openLogins = Boolean(openLogin);

  return pathname === "/checkout" ? null : (
    <>
      <NavBarContainerWrap>
        <Container>
          <NavBarContainer>
            {/*---------- Mobile Hamburger Menu---------- */}

            <FontAwesomeIcon
              className="hamburger__icon"
              icon={faBars}
              size="2x"
              onClick={() => setMobileMenubar(true)}
            />

            {/*---------- Mobile Hamburger Menu---------- */}
            <img
              src={
                Logo
                // theme.colors.primary === "#231f20" ? secondaryLogo : primaryLogo
              }
              alt="tatiartant"
              className="nav__logo"
              onClick={() => history.push("/")}
            />

            <NavbarIconsContainer>
              <Tooltip title="Search" placement="top" arrow>
              <SearchOutlinedIcon
                sx={{ fontSize: 32 }}
                onClick={() => setSearchBarOpen(true)}
                />
                </Tooltip>
              <span>
                <Tooltip  title="AddToCart" placement="top" arrow>
                <AddShoppingCartOutlinedIcon
                  sx={{ fontSize: 32 }}
                  onClick={() => setCartSidebarState(true)}
                  />
                  </Tooltip>
                {cartProducts.length ? (
                  <div className="">{cartProducts.length} </div>
                ) : null}
              </span>
              <span>
              {loggedInUser?.email ?

                  <Button onClick={handleClick} variant="outline-secondary">{loggedInUser.displayName.slice(0,6)}</Button>
                :
               
                  // <Button variant="outline-secondary" onClick={handleBookingOpen}>Login</Button>
                  // <Button variant="outline-secondary" MouseOver={handleBookingOpen}>Login</Button>
                  <Tooltip title="MyAccount" TransitionComponent={Zoom} placement="top" arrow> 
                    <PersonIcon
                    sx={{ fontSize: 32 }}
                    onClick={handleBookingOpen}
                  />

                  </Tooltip>
            }
            </span>
            </NavbarIconsContainer>

            <NavItemsContainer>
              <div>
                <p
                  onMouseOver={() => setShopCategoriesOpen(false)}
                  onClick={() => history.push("/")}
                >
                  Home
                </p>
              </div>

              <div>
                <p
                  onMouseOver={() => {
                    setSearchBarOpen(false);
                    setShopCategoriesOpen(true);
                  }}
                  onClick={() => history.push("/products/all-products")}
                >
                  Shop
                </p>
              </div>

              <div>
                <p
                  onMouseOver={() => setShopCategoriesOpen(false)}
                  onClick={() => history.push("/about-us")}
                >
                  About Us
                </p>
              </div>

              <div>
                <p
                  onMouseOver={() => setShopCategoriesOpen(false)}
                  onClick={() => history.push("/contact-us")}
                >
                  Contact Us
                </p>
              </div>
            </NavItemsContainer>
          </NavBarContainer>
        </Container>
      </NavBarContainerWrap>

      {/* ====================={Search Bar, Sidebar}========================= */}

      <SearchBar searchBarState={[searchBarOpen, setSearchBarOpen]} />

      {width > 768 && (
        <ShopCategories
          shopCategoriesState={[shopCategoriesOpen, setShopCategoriesOpen]}
        />
      )}

      <CartSidebar sidebarState={[cartSidebarOpen, setCartSidebarState]} />
      {/* ====================={Search Bar, Sidebar}========================= */}

      {width <= 768 && (
        <Menubar mobileMenubarState={[mobileMenubar, setMobileMenubar]} />
      )}

      <SignInComponentsModel
       openBooking={openBooking}
       handleBookingClose={handleBookingClose}
      >
      </SignInComponentsModel>

      <LoginDashBoard
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      >
      </LoginDashBoard>
    </>
  );
};
export default Navbar;
