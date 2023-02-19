import styled from "styled-components";
import { colors } from "../../styles/colors/palletes";

export const Battle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: ${colors.gray700};
  border-radius: 9px;
  padding: 8px;
  border: 4px solid rgba(147, 110, 89, 0.24);
  margin-top: 16px;
`;

export const BattleResult = styled.div`
  display: flex;
  align-items: center;
  color: ${({ color, isVictory }) =>
    color ? color : isVictory ? colors.yellow400 : "red"};
  font-size: 28px;
  font-family: "Changa One";
  border-bottom: 2px solid rgba(147, 110, 89, 0.24);
  width: 100%;
  padding: 18px 0;
`;

export const BattlePlayersAgainst = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
  font-size: 54px;
  font-family: "Changa One";
  padding: 24px 12px;
`;

export const TimeStampText = styled.p`
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "Poppins";
`;
