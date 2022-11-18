import styled from "styled-components";

export const Container = styled.div`
  .lds-dual-ring {
    display: inline-block;
    width: 40px;
    height: 40px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 24px;
    height: 24px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #053;
    border-color: green transparent #053 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
