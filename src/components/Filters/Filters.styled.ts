import styled from "styled-components";

export const Filters = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 15px;
  justify-content: end;
  float: right;
`;

export const Search = styled.input``;

export const TypeSelector = styled.div`
  height: 40px;
  cursor: pointer;
`;

export const TypeOptions = styled.ul<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 10px;
  transition: all 0.2s;

  pointer-events: ${(props) => (props.active ? "all" : "none")};
  opacity: ${(props) => (props.active ? "1" : "0")};
`;
