import styled from "styled-components";

export const List = styled.section`
  margin: 0 auto;
  width: 1300px;
  max-width: 90%;
`;

export const Results = styled.section`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  column-gap: 5%;
  row-gap: 40px;
`;
