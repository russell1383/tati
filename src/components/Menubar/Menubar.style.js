import styled from "styled-components";

export const MenubarWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  top: 0;
  visibility: ${({ mobileMenubar }) => (mobileMenubar ? "visiabel" : "hidden")};
  transition: visibility 0.3s ease-out;
`;

export const MenubarContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  position: fixed;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  width: 250px;
  z-index: 11;
  transform: ${({ mobileMenubar }) =>
    mobileMenubar ? "translateX(0)" : "translateX(120%)"};
  transition: transform 0.3s ease-in-out;
  padding: 18px 24px 0 18px;
  overflow: hidden;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuItemsContainer = styled.div`
  overflow-y: auto;
  z-index: 1;
  height: 100%;

  &::-webkit-scrollbar {
    /* display: none; */
  }
  h1 {
    font-size: 20px;
    margin-bottom: 40px;
    cursor: pointer;
    width: fit-content;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;
    font-size: 15px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const MenubarSocilMediaIcons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 2;
  width: 100%;
  // margin-top:7px;
  // margin-right:10px;
  height: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.5);
`;

export const SubMenuWrapper = styled.div`
  display: block;
  max-height: ${({ openSubMenu }) => (openSubMenu ? "100%" : "0")};
  visibility: ${({ openSubMenu }) => (openSubMenu ? "visible" : "hidden")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding-left: 15px;
`;

// ------------------SubmenuBar------------------//

// ------------------ChildmenuBar------------------//

export const ChildMenuWrapper = styled.div`
  display: block;
  max-height: ${({ childMenuOpen }) => (childMenuOpen ? "100%" : "0")};
  visibility: ${({ childMenuOpen }) => (childMenuOpen ? "visible" : "hidden")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding-left: 15px;
`;
