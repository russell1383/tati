import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GET_PRODUCT_CATEGORIES_CALL } from "../../requests/services";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import {
  MenubarContainer,
  MenubarSocilMediaIcons,
  MenubarWrapper,
  MenuItemsContainer,
  SubMenuWrapper,
} from "./Menubar.style";
import SubMenu from "./SubMenu.component";

const Menubar = ({ mobileMenubarState }) => {
  const history = useHistory();
  const [mobileMenubar, setMobileMenubar] = mobileMenubarState;
  const [categories, setCategories] = useState([]);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  let menubarRef = useClickOutside(() => {
    setMobileMenubar(false);
  });

  useEffect(() => {
    GET_PRODUCT_CATEGORIES_CALL().then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <>
      <MenubarWrapper mobileMenubar={mobileMenubar}>
        <MenubarContainer mobileMenubar={mobileMenubar} ref={menubarRef}>
          <MenuItemsContainer>
            <h1 onClick={() => setMobileMenubar(false)}>✕</h1>
            <p onClick={() => history.push("/")}>Home</p>

            <p onClick={() => setOpenSubMenu(!openSubMenu)}>Shop</p>

            <SubMenuWrapper openSubMenu={openSubMenu}>
              {categories.length
                ? categories.map((item, idx) => (
                    <SubMenu
                      item={item}
                      key={item.id}
                      menubarState={setMobileMenubar}
                    />
                  ))
                : null}
            </SubMenuWrapper>

            <p onClick={() => history.push("/about-us")}>About Us</p>
            <p onClick={() => history.push("/contact-us")}>Contact Us</p>
            <p onClick={() => history.push("/sign-in")}>Account</p>
          </MenuItemsContainer>
          <MenubarSocilMediaIcons>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
           <FontAwesomeIcon icon={faPinterest} />
          </MenubarSocilMediaIcons>
        </MenubarContainer>
      </MenubarWrapper>
    </>
  );
};

export default Menubar;
