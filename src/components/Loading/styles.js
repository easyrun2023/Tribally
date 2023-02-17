import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors/palletes";

export const Loading = styled.div`
  min-height: 100vh;
  background: ${colors.gray600};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const breatheAnimation = keyframes`
 0% { transform: scale(1); opacity: 0.2; }
 40% { transform: scale(0.7); opacity: 0.75; }
 100% { transform: scale(1); opacity: 1; }
`;

export const Animation = styled.div`
  animation-name: ${breatheAnimation};
  animation-duration: 6s;
`;
