import styled from "styled-components";
import { SiMicrosoftexcel } from "react-icons/si";
import { BsSearch } from "react-icons/bs";

export const HeaderContainer = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExcelIcon = styled(SiMicrosoftexcel)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.iconExcel};
  transition: 0.5s all ease;

  &:hover {
    color: #fff;
  }
`;
export const SearchIcon = styled(BsSearch)`
  font-size: 1.5rem;
  color: #fff;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 40px;
  margin: auto 20px;
  border-radius: 10%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 1px solid #053;
  background: #053;

  cursor: pointer;
  color: #fff;

  transition: 0.5s all ease;

  &:hover {
    opacity: 0.83;
  }
`;
export const Button = styled.button`
  width: 40px;
  height: 40px;
  margin: auto 20px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.iconExcel};
  background: transparent;

  cursor: pointer;

  transition: 0.5s all ease;

  &:hover {
    background: #053;
    border: 1px solid #eee;
  }
`;

export const ContentDate = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.colors.text};

  input {
    padding: 0.5rem;
    font-size: 1.2rem;
    border: 0;
    border-bottom: 2px solid #053;
    outline: none;
    background: transparent;
    color: ${(props) => props.theme.colors.text};
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(0.8) brightness(50%) sepia(100%) saturate(10000%)
      hue-rotate(500deg);
  }
`;
