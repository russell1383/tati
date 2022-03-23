import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/banner-images/banner-img1.png";
import img2 from "../../assets/images/banner-images/banner-img2.jpg";
import img3 from "../../assets/images/banner-images/banner-img3.jpg";
import { BannerContainer, BannerWrapper } from "./Banner.style";
import SecondaryButton from "../Buttons/SecondaryButton.component";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();
  const settings = {
    dots: true,
    pauseOnHover: true,
    fade: true,
    infinite: true,
    autoPlaySpeed: 3500,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <BannerWrapper>
        <Slider {...settings}>
          <BannerContainer>
            <img src={img1} alt="" />
            <div className="banner__img__overlay-1 banner__overlay">
              <h1>Handloom Products of Bangladesh</h1>
              <span onClick={() => history.push("/products/all-products")}>
                <SecondaryButton>Shop Now</SecondaryButton>
              </span>
            </div>
          </BannerContainer>

          <BannerContainer>
            <img src={img2} alt="" />
            <div className="banner__img__overlay-2 banner__overlay">
              <h1>Handloom Products of Bangladesh</h1>
              <span onClick={() => history.push("/products/all-products")}>
                <SecondaryButton>Shop Now</SecondaryButton>
              </span>
            </div>
          </BannerContainer>

          <BannerContainer>
            <img src={img3} alt="" />
            <div className="banner__img__overlay-3 banner__overlay">
              <h1>Handloom Products of Bangladesh</h1>
              <span onClick={() => history.push("/products/all-products")}>
                <SecondaryButton>Shop Now</SecondaryButton>
              </span>
            </div>
          </BannerContainer>
        </Slider>
      </BannerWrapper>
    </>
  );
};

export default Banner;
