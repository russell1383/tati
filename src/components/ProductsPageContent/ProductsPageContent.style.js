import styled from "styled-components";

export const ProductsPageContentContainer = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    padding: 3% 0;

    @media (max-width: 768px) {
      font-size: 20px;
      padding: 30px 0;
    }
  }
`;
export const ProductLayoutCustomize = styled.div`
  border-bottom: 1px solid #ebebeb;
  border-top: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
  }

  .left__section {
    border-right: 1px solid #ebebeb;
    cursor: pointer;

    @media (max-width: 768px) {
      border: none;
    }
  }
  .right__section {
    display: flex;
    cursor: pointer;

    @media (max-width: 768px) {
      border-right: 1px solid #ebebeb;
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
    }
  }
`;

export const LayoutCustomizeIcon = styled.div`
  height: 100%;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  & > * {
    margin: 0 0 0 15px;
    color: lightgray;

    @media (max-width: 400px) {
      margin: 0;
    }
  }

  & > :nth-child(1) {
    color: ${({ changeLayout, theme }) =>
      changeLayout ? theme.colors.primary : "#ABABAB"};
  }
  & > :nth-child(2) {
    color: ${({ changeLayout, theme }) =>
      changeLayout ? "#ABABAB" : theme.colors.primary};
  }
  @media (max-width: 400px) {
    width: 90px;
    justify-content: space-around;
  }
`;

export const ProductCustomizeText = styled.p`
  padding: 18px 45px;
  border-left: 1px solid #ebebeb;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    width: 50%;
    text-align: center;
  }

  @media (max-width: 560px) {
    padding: 12px 0px;
  }

  /* @media (max-width: 400px) {
    padding: 10px 0;
  } */
`;

export const ProductsContainer = styled.div`
  margin: 5% 0;
  display: grid;
  grid-template-columns: ${({ changeLayout }) =>
    changeLayout ? "repeat(2, 1fr)" : "repeat(4, 1fr)"};
  grid-gap: 2rem;
  /* grid-template-columns: repeat(auto-fit,minmax(12rem,1fr)); */

  @media (max-width: 768px) {
    grid-template-columns: ${({ changeLayout }) =>
      changeLayout ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
  }
`;

export const PaginationWrap = styled.div`
  .pagination_btns {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 40px;
    width: 80%;

    a {
      padding: 5px 15px;
      margin: 5px;
      font-size: 14px;
      border-radius: 3px;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
      transition: all 0.3s;

      @media (max-width: 768px) {
        padding: 5px 10px;
        margin: 3px;
        font-size: 10px;
      }
      @media (max-width: 350px) {
        padding: 2px 8px;
        margin: 2px;
        font-size: 10px;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .pagination__active a {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  .pagination__disabled a {
    background-color: #e7e7e7;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: #e7e7e7;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
