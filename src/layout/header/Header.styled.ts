import styled from "styled-components";

export const Header = styled.header``;

export const LogoWrapper = styled.figure`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    transform: translate(-5px, -5px);
    border: 10px solid rgb(0, 0, 0);
    border-radius: 50%;
    z-index: -100;
  }
`;

export const Logo = styled.img`
  width: 100%;
  border: 10px solid white;
  border-radius: 50%;
  background-color: white;
  position: relative;
`;
