import styled from "styled-components";

export const Button = styled.button<{ disabled?: boolean }>`
  font: 2rem "Righteous", cursive;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;

  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;

export const Pagination = styled.section<{ disabled: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 1.5rem "Righteous", cursive;
  color: white;
  padding: 35px 0;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};

  p {
    margin: 0 15px;
  }

  ${Button} {
    pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
    cursor: ${(props) => (props.disabled && "default")};
  }
`;
