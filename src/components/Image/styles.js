import styled from "styled-components";
import { colors } from "../../styles/colors/palletes";

export const Image = styled.img`
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
`;
