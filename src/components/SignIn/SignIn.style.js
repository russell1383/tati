import styled from "styled-components";

export const SignInContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 560px) {
    height: 90vh;
  }
`;

export const SignInFormContainer = styled.div`
  @media (max-width: 450px) {
    width: 95vw;
  }
  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }
  p {
    text-align: center;
    span {
      font-weight: 600;
      cursor: pointer;
    }
  }
  form {
    margin: 20px 0;
    .input__wrap {
      position: relative;

      span {
        position: absolute;
        display: block;
        top: 50%;
        right: 10px;
        transform: translate(0%, -50%);
        font-size: 13px;
        cursor: pointer;
      }
    }

    label {
      cursor: pointer;
      text-align: left;
      background-color: ${({ theme }) => theme.colors.secondary};
      position: absolute;
      top: -10px;
      left: 10px;
      padding: 0 8px;
      font-size: 14px;
    }
    input {
      display: block;
      height: 46px;
      width: 400px;
      border: 1px solid lightgray;
      margin-top: 20px;
      padding: 10px;
      font-size: 14px;
      background-color: ${({ theme }) => theme.colors.secondary};
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        background-color: #e8f0fe;
      }

      @media (max-width: 450px) {
        width: 100%;
      }
    }

    small {
      color: red;
      text-align: center;
      display: block;
      margin: 10px;
    }

    button,
    input[type="submit"],
    input[type="reset"] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 100%;
    }

    div {
      width: 100%;
      text-align: center;
    }
  }
`;

///////////////// OTP Styles/////////////////

export const OtpForm = styled.form`
  width: 300px;

  @media (max-width: 450px) {
    width: 95vw;
  }

  section {
    display: flex;
    justify-content: space-between;

    input {
      width: 55px;
      height: 55px;
      text-align: center;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    font-size: 14px;
    cursor: pointer;
  }
`;
