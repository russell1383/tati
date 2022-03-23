import styled from "styled-components";
import devices from "../../constants/devices";

export const ProductCardConatiner = styled.div`
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  small {
    font-size: 12px;
  }
`;

export const CardImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  img:last-child {
    position: absolute;
    /* opacity: 0; */
  }
  &:hover img:last-child {
    position: static;
    opacity: 1;
    /* transition: opacity 1s linear; */
  }
  &:hover img:first-child {
    transition: opacity 0.2s linear;
    position: absolute;
    opacity: 0;
  }
`;

export const CardText = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 5px;
  font-family: "Vidaloka", serif;

  @media (max-width: 1300px) {
    font-size: 14px;
  }
  @media (max-width: 560px) {
    font-size: 12px;
  }
`;
