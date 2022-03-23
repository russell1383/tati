import styled from "styled-components";

export const ShopCategoriesWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  visibility: ${({ shopCategoriesOpen }) =>
    shopCategoriesOpen ? "visiabel" : "hidden"};
  transition: visibility 0.3s ease-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ShopCategoriesContainer = styled.div`
  width: 70vw;
  /* height: 70vh; */
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 5;
  margin: 0 auto;
  position: relative;
  left: 0;
  right: 0;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  padding: 25px;

  @media (max-width: 1100px) {
    width: 95vw;
  }
`;

export const ShopCategoriesContent = styled.div`
  width: 50%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  div {
    small {
      color: ${({ theme }) => theme.colors.primary};
      font-family: "Vidaloka", serif;
      font-weight: bold;
      cursor: pointer;
    }
    p {
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 5px;
      cursor: pointer;
    }
  }
`;

export const ShopCatImgContainer = styled.div`
  width: 55%;
  display: flex;
  & > :nth-child(1) {
    height: 100%;
    width: 50%;
    margin-right: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 50%;

    & > :nth-child(1) {
      margin-bottom: 8px;
    }
    & > :nth-child(2) {
      margin-top: 8px;
    }
    img {
      width: 100%;
      height: 50%;
      object-fit: cover;
    }
  }
`;
