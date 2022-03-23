import styled from "styled-components";

export const NavBarContainerWrap = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  z-index: 10;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ebebeb;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  margin: 0 auto;
  padding: 0.9% 0;

  @media (max-width: 1100px) {
    width: 95vw;
  }

  @media (max-width: 768px) {
    position: relative;
    padding: 15px 0;
    flex-direction: row-reverse;
  }

  .nav__logo {
    width: 70px;
    height: 70px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-left: -70px;
    }
    @media (max-width: 560px) {
      width: 65px;
      height: 65px;
    }
  }
  .hamburger__icon {
    display: none;
    @media (max-width: 768px) {
      display: block;
      font-size: 25px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const NavbarIconsContainer = styled.div`
  font-size: 22px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    & > :nth-child(3) {
      display: none;
    }
  }
  & > * {
    width: 24px;
    height: auto;
    cursor: pointer;
    margin-left: 40px;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 768px) {
      margin-left: 0px;
      margin-right: 25px;
    }
    @media (max-width: 560px) {
      width: 20px;
      height: auto;
    }
  }

  span {
    position: relative;
    div {
      position: absolute;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      top: 0;
      right: -5px;
      background-color: red;
      font-size: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid;
    }
  }
`;

export const NavItemsContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 10%;
  margin: auto;
  width: 380px;
  display: flex;
  justify-content: space-between;
  font-family: "Vidaloka", serif;
  height: fit-content;
  /* background-color: red; */

  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    display: none;
  }

  & > :nth-child(1) {
    width: 20%;
  }
  & > :nth-child(2) {
    width: 20%;
  }
  & > :nth-child(3) {
    width: 30%;
  }

  div {
    /* width: 25%; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    /* border-right: 1px solid ${({ theme }) => theme.colors.primary};
    line-height: 0px; */

    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 8%;
      right: 0;
      width: 1px;
      height: 70%;
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  & > :nth-child(4) {
    width: 30%;

    &::after {
      display: none;
    }
  }

  p {
    cursor: pointer;

    &::after {
      content: "";

      display: block;
      margin: 0 auto;
      margin-top: 5px;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
