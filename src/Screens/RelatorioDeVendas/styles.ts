import styled from "styled-components";

export const Container = styled.div`
  max-height: 450px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
  }

  table {
    width: 100%;
    position: relative;
    user-select: none;
    thead {
      tr {
        th {
          position: sticky;
          top: 0;
          transition: all 1s ease;
          color: ${(props) => props.theme.colors.text};
          background: ${(props) => props.theme.colors.main};
          padding: 0.5rem 0.8rem;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 0.5rem;
          text-align: center;
          transition: all 1s ease;
          color: ${(props) => props.theme.colors.text};
          white-space: nowrap;
        }

        &:nth-child(even) {
          background: #5555;
        }
      }
    }
  }
`;
