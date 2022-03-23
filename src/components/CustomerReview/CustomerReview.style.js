import styled from "styled-components";

export const CustomerReviewContainer = styled.div`
  width: 70vw;
  margin: 5% auto;
  text-align: center;
  overflow-x: hidden;

  @media (max-width: 1100px) {
    width: 95vw;
  }

  @media (max-width: 768px) {
    width: 95vw;
    margin: 25px auto;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-family: "Vidaloka", serif;
  }

  h5 {
    font-weight: 200;
    height: 25px;
    padding-top: 5px;
  }
  .slick-slide > div {
    margin: 0 20px;
  }
  .slick-list {
    margin: 0 -20px;
  }
`;

export const ReviewStarsContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  & > * {
    margin-left: 3px;
  }
`;

export const ArrowButtonContainer = styled.div`
  width: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #eee;
  font-size: 30px;
  margin-top: 5%;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 30px auto;
  }
`;
