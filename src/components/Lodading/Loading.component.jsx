import React from "react";
import styled from "styled-components";
import loadingSpinner from "../../assets/icons/loading.gif";

const LoadingWrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 200px;

    @media (max-width: 768px) {
      width: 150px;
    }

    @media (max-width: 768px) {
      width: 120px;
    }
  }
`;

function Loading() {
  return (
    <LoadingWrapper>
      <img src={loadingSpinner} alt="" />
    </LoadingWrapper>
  );
}

export default Loading;
