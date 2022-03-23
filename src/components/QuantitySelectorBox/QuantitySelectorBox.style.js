import styled from "styled-components";

export const QuantitySelectorWrap = styled.div`
  position: relative;
  width: 100%;

  u {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 560px) {
      position: relative;
      top: 0;
    }
  }
`;

export const QuantitySelectorBoxContainer = styled.div`
  width: 100px;
  height: 45px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 560px) {
    width: 90px;
    height: 35px;
  }

  & > * {
    width: 33%;
  }
  button {
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.primary};
  }
  span {
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
