import styled from "styled-components";

export const ProductCardSecondaryContainer = styled.div`
  /* width: 500px;
  height: 500px; */
  max-height: 500px;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition-duration: 3s;
  }
  &:hover > img {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    z-index: 0;
  }

  .img__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: #fff;
    background-image: linear-gradient(
      to top,
      rgba(4, 4, 4, 0.65),
      rgba(54, 54, 54, 0.2)
    );

    .overlay__content {
      /* height: 28%;
      width: 100%; */
      position: absolute;
      bottom: 0;
      padding: 0 0 5% 10%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      P {
        font-size: 26px;
        padding-bottom: 15px;
        font-family: "Vidaloka", serif;
        @media (max-width: 560px) {
          font-size: 18px;
        }
      }
      div {
        display: flex;
        align-items: flex-start;
      }
    }
  }
`;
