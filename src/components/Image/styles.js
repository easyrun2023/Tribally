import styled from "styled-components";

export const Image = styled.img`
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
`;
