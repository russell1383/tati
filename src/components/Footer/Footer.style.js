import styled from "styled-components";

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  padding: 5% 0;

  @media (max-width: 560px) {
    padding-top: 40px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    color: ${({ theme }) => theme.colors.secondary};
    @media (max-width: 560px) {
      width: 100%;
      margin-bottom: 10px;
    }
    p {
      font-size: 17px;
      margin-bottom: 20px;
      cursor: pointer;
    }
    .footer__titile_text {
      color: ${({ theme }) => theme.colors.footerTitleText};
      font-size: 15px;
      margin-bottom: 18px;
      font-family: "Vidaloka", serif;
    }

    h3 {
      width: 100px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
    input {
      padding: 10px 12px;
      border-radius: none;
      border: 1px solid #e3dcdc;
      width: 100%;
      transition: border-color 0.1s ease-in-out;
      background: transparent;
      color: #fff;
      font-size: 16px;
      margin-bottom: 8%;
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.footerTitleText};
        border-radius: none;
      }
      ::placeholder {
        color: #fff;
      }
    }
  }
  .about__shop {
    @media (max-width: 1000px) {
    }
  }
  .footer__menu {
    @media (max-width: 560px) {
    }
  }
  .newsletter__section {
    @media (max-width: 1000px) {
      width: 100%;
    }

    button {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
      padding: 12px 20px;
      border: none;
      outline: none;
      letter-spacing: 0.2em;
    }
  }
  .copyright__section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    p {
      margin: 0;
      font-size: 15px;
      @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
      }
      @media (max-width: 350px) {
        font-size: 12px;
      }
    }

    .payment__icons {
      width: 25%;
      @media (max-width: 1000px) {
        width: 30%;
      }
      @media (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
      }
    }
  }

  .dev__info__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    cursor: pointer;

    @media (max-width: 900px) {
      order: 1;
      width: 100%;
      padding-top: 15px;
      margin-top: 15px;
      border-top: 1px solid lightgray;
    }

    @media (max-width: 350px) {
      font-size: 10px;
    }

    img {
      width: 90px;
    }
  }
`;
