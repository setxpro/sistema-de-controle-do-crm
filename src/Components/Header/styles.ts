import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  height: 65px;

  transition: all 1s ease;
  background: ${(props) => props.theme.colors.header};
  border: 1px solid ${(props) => props.theme.colors.borders};
  border-top: 0;
  border-left: 0;
  border-right: 0;

  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentBtnMobile = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: inline;
  }
`;

export const BarsMenu = styled(FaBars)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  animation: 1s rot linear both;
  cursor: pointer;
  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }
`;
export const CloseMenu = styled(MdClose)`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.text};
  animation: 1s rot linear both;
  cursor: pointer;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }
`;
export const BellIcon = styled(AiOutlineBell)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};
`;
export const Dark = styled(MdOutlineNightlight)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};

  animation: 1s rot linear both;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }
`;
export const Light = styled(MdOutlineLightMode)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};

  animation: 1s rot linear both;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }
`;
export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const ContentRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
export const ContentAreaNotify = styled.div<{ notify: number }>`
  .notification {
    position: relative;

    img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      border: 3px solid #054845;
      padding: 2px;
    }

    &::before {
      content: "";
      background: #059;
      width: 10px;
      height: 10px;

      position: absolute;
      top: 2px;
      right: 0;

      transition: all 1s ease;
      border: 2px solid ${(props) => props.theme.colors.header};
      border-radius: 50%;

      display: ${(props) => (props.notify <= 0 ? "none" : "inline")};
    }
  }
`;
export const ContentAreaToggleTheme = styled.div``;
export const ContentAreaNameAndAvatar = styled.div<{ isLogged: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;

  .avatar {
    display: flex;
    align-items: center;

    position: relative;

    img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      border: 3px solid #054845;
      padding: 2px;
    }

    &::before {
      content: "";
      background: ${(props) => (props.isLogged ? "#0f0" : "#f00")};
      width: 15px;
      height: 15px;

      position: absolute;
      right: 0;
      bottom: 5px;

      transition: all 1s ease;
      border: 2px solid ${(props) => props.theme.colors.header};
      border-radius: 50%;
    }
  }
`;

export const ContentNameArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h4,
  h6 {
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};
  }
  h4 {
    font-size: 1.1em;
    font-weight: 400;
    text-align: end;
  }
  h6 {
    font-size: 1em;
    margin-left: 30px;
    font-weight: 400;
    text-align: end;
  }
`;
