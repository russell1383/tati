import styled from "styled-components";

export const CheckoutContentContainer = styled.div`
  height: auto;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.secondary} 50%,
    #ededed 50%
  );
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 3%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    background: none;
    position: relative;
  }

  & > * {
    width: 50%;

    @media (max-width: 768px) {
      width: 95vw;
      margin: 0 auto;
    }
  }
`;

export const CartProductsSection = styled.div`
  padding-right: 20%;
  padding-left: 3%;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 1100px) {
    padding-right: 10%;
    padding-left: 2%;
  }
  @media (max-width: 900px) {
    padding-right: 5%;
    padding-left: 2%;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 140px;
  }

  .cart_product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    & > :nth-child(2) {
      width: 50%;
    }
    img {
      width: 64px;
      height: 64px;
      object-fit: contain;
    }
    p {
    }
  }
`;

export const CuponCodeSection = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(166, 166, 166, 0.34);
  border-bottom: 1px solid rgba(166, 166, 166, 0.34);
  padding: 30px 0;
  margin: 15px 0;
  input {
    width: 78%;
    padding: 15px;
    height: 50px;
  }
`;

export const PriceCalcSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutPageButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 3px;
  font-weight: 500;
  padding: 15px 25px;
`;
