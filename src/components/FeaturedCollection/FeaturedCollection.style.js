import styled from "styled-components";

export const FeaturedCollectionContainer = styled.div`
  text-align: center;
  margin: 4% 0;
  color: ${({ theme }) => theme.colors.primary};

  h4 {
    font-family: "Vidaloka", serif;
    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  .featured__collection {
    display: flex;
    justify-content: space-between;
    width: 250px;
    font-size: 24px;
    font-weight: 200;
    margin: 2% auto;

    @media (max-width: 560px) {
      width: 200px;
      margin-top: 18px;
    }

    p {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary};

      @media (max-width: 560px) {
        font-size: 18px;
      }

      &::after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 0;
        height: 1px;
        background: ${({ theme }) => theme.colors.primary};
        transition: width 0.3s;
      }

      &:hover::after {
        width: 100%;
      }
    }

    .active__feature {
      &::after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 0;
        height: 1px;
        background: ${({ theme }) => theme.colors.primary};
        transition: width 0.3s;
        width: 100%;
      }
    }
  }
`;

export const FeaturedCollectionCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
  button {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: none;
    outline: none;
    box-shadow: 0 2px 10px rgb(54 54 54 / 15%);
    background-color: transparent;
    font-size: 18px;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 768px) {
      display: none;
    }
  }

  .product__container {
    width: 89vw;
    margin: 0 auto;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 100%;
    }

    .slick-slide > div {
      margin: 0 20px;
      @media (max-width: 1200px) {
        margin: 0 10px;
      }
      @media (max-width: 560px) {
        margin: 0 5px;
      }
    }
    .slick-list {
      margin: 0 -20px;
      @media (max-width: 1200px) {
        margin: 0 -10px;
      }
      @media (max-width: 560px) {
        margin: 0 -5px;
      }
    }
  }
`;
