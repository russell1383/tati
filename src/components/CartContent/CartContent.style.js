import styled from "styled-components";

export const CartContentWrap = styled.div``;

export const CartContentContainer = styled.div`
  width: 60vw;
  margin: 3% auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1100px) {
    width: 95vw;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const EstimateShipping = styled.div`
  margin: 10% 0;
  form {
    fieldset {
      border: 1px solid lightgray;
      padding: 5% 5%;
      display: flex;
      justify-content: space-between;

      @media (max-width: 560px) {
        flex-direction: column;
      }
    }
    legend {
      background: color: ${({ theme }) => theme.colors.secondary};
      padding: 5px 10px;
      font-size: 18px;
    }
    select {
      height: 45px;
      width: 30%;
      font-size: 16px;
      padding: 10px;
      cursor: pointer;
      border: 1px solid lightgray;
      @media (max-width: 560px) {
        width: 100%;
        margin-bottom: 15px;
      }
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
    }
    input {
      height: 45px;
      width: 20%;
      font-size: 16px;
      padding: 10px;
      border: 1px solid lightgray;

      @media (max-width: 560px) {
        width: 100%;
        margin-bottom: 15px;
      }

      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
export const CartPageButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  height: 45px;
  padding: 0 20px;
  border: none;
  outline: none;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (max-width: 450px) {
    width: 100%;
    margin-top: 8px;
  }
`;

export const ProductCartContainer = styled.div`
  padding: 4% 0;
  margin: 4% 0;

  @media (max-width: 450px) {
    border-top: 1px solid lightgray;
    padding: 8% 0;
    margin: 8% 0;
  }
  .product__table__title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
    margin-bottom: 30px;

    @media (max-width: 450px) {
      display: none;
    }

    & > :nth-child(1) {
      width: 50%;
      text-align: left;
    }
    & > :nth-child(2) {
      width: 25%;
      text-align: right;
    }
    & > :nth-child(3) {
      width: 25%;
      text-align: right;
    }

    p {
      @media (max-width: 450px) {
        font-size: 12px;
        font-weight: bold;
      }
    }
  }

  .product__subtotal__section {
    border-top: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding-top: 15px;
    position: relative;

    @media (max-width: 450px) {
      flex-direction: column;
    }

    & > * {
      width: 30%;

      @media (max-width: 450px) {
        width: 100%;
        margin-bottom: 20px;
      }
    }
    section {
      textarea {
        width: 100%;
      }
    }
    & > :nth-child(3) {
      text-align: right;

      p {
        margin-bottom: 15px;
      }
    }
  }
`;

//////// Cart Content Product Container ////////

export const CartContentProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 450px) {
  }

  & > :last-child {
    @media (max-width: 450px) {
      display: none;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 450px) {
      font-size: 14px;
    }
  }

  section {
    width: 50%;
    display: flex;
    align-items: center;
    text-align: left;
    @media (max-width: 450px) {
      width: 70%;
    }

    img {
      width: 25%;
      margin-right: 5%;
    }
  }
  div {
    margin: 0 auto;
    width: 12%;

    @media (max-width: 450px) {
      width: 30%;
      padding-left: 10px;
    }

    div {
      width: 100%;
    }
    u {
      position: static;
      display: block;
      bottom: 0;
      right: 0;
      font-size: 12px;
      top: 0;
      transform: translateY(0);
      cursor: pointer;
      margin-top: 10px;
    }
  }
`;
