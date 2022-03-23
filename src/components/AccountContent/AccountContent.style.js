import styled from "styled-components";

export const AccountContainer = styled.div`
  width: 70vw;
  margin: 5% auto;
  overflow-x: hidden;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 1100px) {
    width: 95vw;
  }

  @media (max-width: 768px) {
    width: 95vw;
    margin: 25px auto;
  }

  small {
    font-weight: bold;
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    hr {
      margin-top: 12px;
    }

    section {
      width: 70%;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    aside {
      width: 25%;
      @media (max-width: 768px) {
        width: 100%;
      }
      & > :last-child {
        div {
          font-size: 14px;
        }
      }
    }
  }
`;

export const OrderHistoryTableWrap = styled.div`
  overflow-x: auto;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
    font-size: 14px;

    @media (max-width: 560px) {
      padding: 5px;
      font-size: 10px;
    }
  }
  th {
    font-family: "Vidaloka", serif;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
