import styled from "styled-components";

export const CartProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 15px;
  .left {
    width: 120px;
    height: 160px;

    @media (max-width: 420px) {
      width: 100px;
      height: 140px;
    }
    /* @media (max-width: 380px) {
      width: 80px;
      height: 120px;
    } */

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 380px) {
      margin-left: 10px;
      width: 60%;
    }
    h6 {
      font-size: 15px;
      color: ${({ theme }) => theme.colors.primary};
      min-width: 200px;
      font-family: "Vidaloka", serif;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @media (max-width: 560px) {
        font-size: 12px;
      }
    }
  }
`;
