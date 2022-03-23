import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useLocation } from "react-router";
import { Container } from "../../constants/container";
import { FooterContainer, FooterContent } from "./Footer.style";
import paymentOptionsImg from "../../assets/images/payment-options.png";
import { useTheme } from "styled-components";
import ecDarkLogo from "../../assets/logos/ec-nanager-black.svg";
import ecWhiteLogo from "../../assets/logos/ec-manager-white.svg";

const Footer = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const theme = useTheme();
  return pathname === "/checkout" ? null : (
    <>
      <FooterContainer>
        <Container>
          <FooterContent>
            <div className="about__shop">
              <p className="footer__titile_text">About the shop</p>
              <p>
                Explore traditional, unique handloom and environment friendly products from the <br />{" "}
                finest artisans of Bangladesh.
              </p>
              <p>
                Showroom Address: <br />
                Tati Ar Tant
                <br />
                House:14, Road: 11
                <br />
                Mohammadi Housing society, Mohammadpur, Dhaka.
              </p>
              <p>Contact us : +8801737900666</p>
              <p>Email : tatiartant@gmail.com</p>
              <h3>
                <FontAwesomeIcon
                  icon={faFacebook}
                  onClick={() =>
                    window.open("https://www.facebook.com/tatiartant")
                  }
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  onClick={() =>
                    window.open("https://www.instagram.com/tati_ar_tant")
                  }
                />
                <FontAwesomeIcon icon={faTwitter} />
              </h3>
            </div>

            <div className="footer__menu">
              <br />
              <br />
              <p>Return & Enchanges</p>
              <p>Shipping</p>
              <p onClick={() => history.push("/")}>Terms of Service</p>
              <p onClick={() => history.push("/privacy-statement")}>
                Privacy Statement
              </p>
              <p onClick={() => history.push("/cookie-policy")}>
                Cookie Policy
              </p>
            </div>

            <div className="newsletter__section">
              <p className="footer__titile_text">Newsletter</p>
              <p>
                Subscribe to receive updates, access to <br /> exclusive deals,
                and more.
              </p>
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>

            <div className="copyright__section">
              <p>Copyright © Tati ar Tant . All Rights Reserved .</p>

              <div
                className="dev__info__wrap"
                onClick={() => window.open("https://www.primex-bd.com/")}
              >
                <img
                  src={
                    theme.colors.primary === "#231f20"
                      ? ecDarkLogo
                      : ecWhiteLogo
                  }
                  alt=""
                />
                &nbsp;&nbsp; <small>by</small>
                <strong> &nbsp; Primex information systems limited</strong>
              </div>
              <img src={paymentOptionsImg} className="payment__icons" alt="" />
            </div>
          </FooterContent>
        </Container>
      </FooterContainer>
    </>
  );
};

export default Footer;
