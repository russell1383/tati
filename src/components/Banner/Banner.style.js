import styled from "styled-components";

export const BannerWrapper = styled.div`
  .slick-active {
    @keyframes slideInFromLeft {
      0% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes fadeInLeft {
      from {
        opacity: 0;

        transform: translateX(-120%);
      }

      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;

        transform: translateX(80%);
      }

      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    .banner__img__overlay-1 {
      opacity: 0;

      animation: fadeInLeft 1s ease-in-out 0s forwards;
    }
    .banner__img__overlay-2 {
      opacity: 0;

      animation: fadeInUp 1s ease-in-out 0s forwards;
    }
    .banner__img__overlay-3 {
      opacity: 0;

      animation: fadeInRight 1s ease-in-out 0s forwards;
    }

    img {
      transition: all 0.5s;
      animation: 1s ease-out 0s 1 slideInFromLeft;
    }
  }

  .slick-dots {
    li {
      width: 10px;
      height: 10px;
    }
  }
`;

export const BannerContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
  z-index: 2;

  img {
    width: 100%;
    vertical-align: bottom;
  }

  .banner__overlay {
    h1 {
      color: #fff;
      margin-bottom: 10px;
      text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.7),
        0px 4px 7px rgba(0, 0, 0, 0.3), 0px 9px 12px rgba(0, 0, 0, 0.3);
      font-size: 38px;
      @media (max-width: 1100px) {
        font-size: 18px;
      }
      @media (max-width: 560px) {
        font-size: 14px;
      }
    }
  }

  .banner__img__overlay-1 {
    position: absolute;
    bottom: 20%;
    right: 10%;
    height: 10vw;
    text-align: right;

    @media (max-width: 1100px) {
      bottom: 25%;
    }
    @media (max-width: 768px) {
      bottom: 30%;
    }
    @media (max-width: 560px) {
      bottom: 35%;
    }

    div {
      margin-left: auto;
      @media (max-width: 560px) {
        width: 80%;
      }
    }
  }

  .banner__img__overlay-2 {
    position: absolute;
    bottom: 20%;
    left: 10%;
    height: 10vw;
    text-align: left;

    @media (max-width: 1100px) {
      bottom: 25%;
    }
    @media (max-width: 768px) {
      bottom: 30%;
    }
    @media (max-width: 560px) {
      bottom: 35%;
    }

    div {
      @media (max-width: 560px) {
        width: 80%;
      }
    }
  }

  .banner__img__overlay-3 {
    position: absolute;
    bottom: 20%;
    right: 10%;
    height: 10vw;
    text-align: left;

    @media (max-width: 1100px) {
      bottom: 25%;
    }
    @media (max-width: 768px) {
      bottom: 30%;
    }
    @media (max-width: 560px) {
      bottom: 35%;
    }

    div {
      margin-left: auto;
      @media (max-width: 560px) {
        width: 80%;
      }
    }
  }
`;
