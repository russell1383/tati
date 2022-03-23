import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import nfImg from "../../assets/images/404.png";
import PrimaryButton from "../Buttons/PrimaryButton.component";

const NotFoundWrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  img {
    width: 400px;

    @media (max-width: 768px) {
      width: 300px;
    }
    @media (max-width: 560px) {
      width: 200px;
    }
  }
`;

function NotFound() {
  const history = useHistory();
  return (
    <NotFoundWrapper>
      <img src={nfImg} alt="" />
      <br />
      <br />
      <p>
        The page you are looking for might have been moved, renamed, or might
        never existed.
      </p>
      <br />
      <span onClick={() => history.push("/")}>
        <PrimaryButton>Back Home</PrimaryButton>
      </span>
    </NotFoundWrapper>
  );
}

export default NotFound;
