import styled from "styled-components";

export const CartSidebarWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  top: 0;
  visibility: ${({ cartSidebarOpen }) =>
    cartSidebarOpen ? "visiabel" : "hidden"};
  transition: visibility 0.3s ease-out;
`;

export const CartSidebarContainer = styled.div`
  height: 100vh;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 11;
  box-shadow: 2px 0 10px rgb(54 54 54 / 20%), -2px 0 10px rgb(54 54 54 / 20%);
  transform: ${({ cartSidebarOpen }) =>
    cartSidebarOpen ? "translateX(0)" : "translateX(140%)"};
  transition: transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    left: 0;
    transform: ${({ cartSidebarOpen }) =>
      cartSidebarOpen ? "translateX(0)" : "translateX(-140%)"};
  }
  @media (max-width: 560px) {
    width: 80vw;
  }
`;

export const CartSidebarTopSection = styled.div`
  height: 70vh;
  overflow: hidden;

  h1 {
    display: flex;
    justify-content: space-between;
    font-size: 19px;
    color: ${({ theme }) => theme.colors.primary};
    padding: 6% 6%;
    cursor: pointer;
  }

  small {
    font-size: 15px;
    text-align: center;
    border-top: 1px solid lightgray;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid lightgray;
    display: block;
    padding: 8px 0;

    @media (max-width: 560px) {
      font-size: 12px;
    }
    @media (max-width: 350px) {
      font-size: 10px;
    }
  }
`;

export const CartProductWrap = styled.div`
  margin-top: 20px;
  overflow-y: scroll;
  height: 52vh;
  padding: 0 6%;

  ::-webkit-scrollbar {
    display: none;
  }

  p {
    text-align: center;
  }
`;

export const CartSidebarBottomSection = styled.div`
  height: 30vh;
  width: 100%;
  background: transparent;
  padding: 6% 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid lightgray;

  p {
    color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  .whatsapp_contact {
    display: flex;
    justify-content: space-between;
    input {
      width: 50%;
    }
  }
  div {
    width: 100%;
    text-align: center;
    @media (max-width: 400px) {
      font-size: 10px;
    }
  }
`;
