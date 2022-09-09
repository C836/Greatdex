import styled from "styled-components";

const main = "#c40b24";

export const Footer = styled.footer``;

export const InnerCircle = styled.figure`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -200px);
  width: 110px;
  height: 61px;
  display: flex;
  justify-content: center;
`;

export const CircleBackground = styled.div`
  border: 6px solid black;
  border-bottom-left-radius: 61px;
  border-bottom-right-radius: 61px;
  border-top: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
`;
