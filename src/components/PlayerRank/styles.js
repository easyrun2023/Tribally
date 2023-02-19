import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors/palletes";

export const PlayerRank = styled(Link)`
  position: relative;
  margin-top: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
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
  border-radius: 9px;
  border: ${({ isActive }) =>
    isActive ? "4px solid transparent" : "2px solid rgba(147, 110, 89, 0.24)"};
  padding: 6px;

  &:first-child {
    margin-top: 0;
  }
`;

export const PlayerRankNumberName = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const PlayerRankName = styled.div`
  display: flex;
  color: #fff;
  margin-left: 29px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 20px;
`;

export const PlayerRankNumber = styled.div`
  background: ${() =>
    `linear-gradient(0deg, ${colors.gray500}, ${colors.gray500}), ${colors.gray500}`};
  border-radius: 5px;
  font-family: "Changa One";
  font-weight: 400;
  padding: 8px 23px;
  color: ${colors.gray100};
  font-size: 30px;
`;

export const PlayerRankLevel = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayerRankPoints = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const PlayerRankPointsNumber = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-left: 8px;
  font-family: "Poppins";
  color: ${colors.yellow400};
`;

export const PlayerRankLeagueName = styled.div`
  margin-left: 51px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 18px;
  color: ${colors.gray100};
  margin-right: 63px;
`;

export const PlayerRankLeague = styled.div`
  position: absolute;
  height: 58px;
  width: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transform: rotate(-45deg);
  border: ${() => `3.6px solid ${colors.gray700}`};
  z-index: 3;
  outline: ${() => `solid 3px ${colors.gray200}`};
  background: ${colors.white200};
  outline-offset: -6px;
  padding: 2px;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  img {
    transform: rotate(45deg);
  }
`;
