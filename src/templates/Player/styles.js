import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors/palletes";

export const Player = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const rankImageAnimation = keyframes`
 0% { transform: scale(2) translateX(-50px) rotateY(180deg); }
 100% { transform: scale(1) translateX(0px) rotateY(0deg); }
`;

const playerContainerAnimation = keyframes`
 0% { transform: scale(2) translateX(50px) rotateY(180deg); }
 100% { transform: scale(1) translate(0px) rotateY(0deg); }
`;

export const PlayerOverview = styled.div`
  display: flex;
  align-items: stretch;
  background: ${colors.gray700};
  width: 100%;
  max-width: 860px;
  margin-top: 61px;
  padding: 12px;
  border-radius: 9px;
  background: ${({ isActive }) =>
    isActive
      ? `linear-gradient(${colors.gray700}, ${colors.gray700}) padding-box,
    linear-gradient(
        to right,
        ${colors.orange400},
        ${colors.orange500},
        ${colors.orange600}
      )
      border-box`
      : colors.gray700};
  border: ${({ isActive }) =>
    isActive ? "4px solid transparent" : "4px solid rgba(147, 110, 89, 0.24)"};
`;

export const RankImage = styled.div`
  background: ${colors.white200};
  border: ${() => `8px solid ${colors.gray200}`};
  border-radius: 9px;
  max-width: 250px;
  animation-name: ${rankImageAnimation};
  animation-duration: 1s;
`;

export const PlayerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-left: 16px;
  animation-name: ${playerContainerAnimation};
  animation-duration: 1s;
`;

export const PlayerTier = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const PlayerTierNumber = styled.div`
  display: flex;
  align-items: center;

  background: ${() =>
    `linear-gradient(0deg, ${colors.gray500}, ${colors.gray500}), ${colors.gray500}`};
  border-radius: 5px;
  font-family: "Changa One";
  font-weight: 400;
  padding: 8px 23px;
  color: ${colors.gray100};
  font-size: 30px;
`;

export const PlayerName = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 47px;
  font-family: "Poppins";
  color: #ffffff;
  margin-left: 12px;
`;

export const PlayerLevel = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const PlayerStars = styled.div`
  color: ${colors.yellow400};
  font-family: "Poppins";
  font-weight: 700;
  font-size: 20px;
  margin-left: 8px;
`;

export const PlayerBattles = styled.div`
  color: ${colors.yellow400};
  font-weight: 600;
  font-size: 18px;
  font-family: "Poppins";
  color: #ffffff;
  margin-top: 8px;
`;
