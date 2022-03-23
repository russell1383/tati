import styled from "styled-components";

export const ProductCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  height: auto;
  @media (max-width: 1140px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    padding: 40px 0;
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
