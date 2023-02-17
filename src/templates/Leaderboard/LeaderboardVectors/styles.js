import styled from "styled-components";
import { colors } from "../../../styles/colors/palletes";

export const Leaderboard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const VectorContainer = styled.div`
  width: 100%;
  mix-blend-mode: overlay;
  margin-top: -100px;
  height: 131px;
  background: ${({ image }) => `url(${image})`};
`;

export const WoodContainer = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 635px;
  height: 223px;
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Season = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 45.2359px;
  background: #271a11;
  margin-bottom: 27px;
`;

export const SeasonText = styled.div`
  margin: 0 8px;
  color: #fae6c7;
  font-weight: 400;
  font-family: "Caesar Dressing";
  font-size: 23.8591px;
`;

export const LeaderboardText = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-family: "Changa One";
  font-size: 46.52px;
  margin-bottom: 8px;
`;
