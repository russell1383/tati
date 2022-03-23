import styled from "styled-components";

export const ReviewCardContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  img {
    width: 280px;
    height: 300px;
    object-fit: scale-down;
    display: block;
    margin: 0 auto;
  }
  h4 {
    font-family: "Vidaloka", serif;
  }
`;
