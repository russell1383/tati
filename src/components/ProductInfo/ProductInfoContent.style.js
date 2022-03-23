import styled from "styled-components";

export const ProductInfoWrap = styled.div``;

export const ProductInfoContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80vw;
  height: auto;
  margin: 5% auto;

  @media (max-width: 1100px) {
    width: 95vw;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductImgContainer = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }

  .image-gallery-content .image-gallery-slide .image-gallery-image {
    @media (max-width: 768px) {
      /* max-height: 50% !important; */
    }
  }

  .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails,
  .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails {
    overflow-y: scroll;
    @media (max-width: 768px) {
      overflow-y: hidden;
      overflow-x: scroll;
    }
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }

  .image-gallery-left-nav .image-gallery-svg,
  .image-gallery-right-nav .image-gallery-svg {
    width: 60px;
    height: 60px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    outline: none;
    border: 4px solid ${({ theme }) => theme.colors.primary};
  }
  /* .image-gallery-content.fullscreen {
    width: 50vw;
    height: 50vh;
    z-index: 990;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .image-gallery.fullscreen-modal {
    background: none;
  } */
`;

export const ProductsDetailsContainer = styled.div`
  width: 40%;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1100px) {
    width: 46%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  .quantity__wrapper {
    & > :first-child {
      width: 120px;
    }

    u {
      display: none;
    }
  }

  button {
    width: 100%;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    div {
      width: 100%;
      text-align: center;
    }
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: 10px;
    }
  }
  small {
    font-size: 14px;
    color: #4d4646;
  }
  p {
  }
  h2 {
    font-size: 19px;
    font-weight: 400;
  }
  h4 {
  }
  h6 {
    font-size: 17px;
  }
  li {
    list-style-position: inside;
    font-size: 17px;
    font-weight: 400;
  }
`;

export const SizeColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin-bottom: 14px;
  }

  .sizes__wrap {
    div {
      span {
        cursor: pointer;
        border: 1px solid lightgray;
        padding: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
  }
  .colors__wrap {
    span {
      display: flex;
    }
  }
`;

export const ColorBox = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  margin-right: 5px;
  background-color: ${({ clr }) => (clr ? clr : null)};
`;
