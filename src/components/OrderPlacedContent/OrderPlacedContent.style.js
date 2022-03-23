import styled from "styled-components";

export const OrderPlacedContainer = styled.div`
  width: 50vw;
  margin: 30px auto;
  padding-bottom: 10%;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 900px) {
    width: 90vw;
  }
  @media (max-width: 768px) {
    width: 95vw;
  }

  h5 {
    font-family: "Vidaloka", serif;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
    margin-bottom: 5px;
  }

  header {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};

    .check__circle {
      color: #8be78b;
      margin-bottom: 8px;
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media (max-width: 560px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  section {
    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const OrderPlacedProductContainer = styled.div`
  display: flex;
  position: relative;
  margin: 15px 0;

  div {
    small {
      display: block;
    }

    h6 {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;
