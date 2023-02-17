import styled from "styled-components";
import { colors } from "../../styles/colors/palletes";

export const Layout = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.gray600};
`;

export const LayoutChildren = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
