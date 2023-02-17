import styled from "styled-components";

export const LayoutImage = styled.div`
  position: fixed;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;
