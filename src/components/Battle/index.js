import React from "react";
import * as S from "./styles";
import { AiFillCrown, AiFillClockCircle } from "react-icons/ai";
import { FaSadCry } from "react-icons/fa";
import { GiBloodySword } from "react-icons/gi";
import moment from "moment";

const Battle = ({
  result,
  playerTeam,
  opponentTeam,
  battleType,
  startTimestamp,
  endTimestamp,
}) => {
  const isVictory = result === "W";
  return (
    <S.Battle>
      <S.TimeStampText>
        <AiFillClockCircle />
        &nbsp; {moment(startTimestamp).format("LT")} -{" "}
        {moment(endTimestamp).format("LT")}
      </S.TimeStampText>
      <S.BattleResult isVictory={isVictory}>
        {isVictory ? <AiFillCrown /> : <FaSadCry />}
        &nbsp; {isVictory ? `Victory` : "Loss"}
      </S.BattleResult>
      <S.BattleResult color={"#fff"}>
        <GiBloodySword />
        &nbsp; {battleType?.toUpperCase()}
      </S.BattleResult>

      <S.BattlePlayersAgainst>
        {playerTeam?.length || 0} VS {opponentTeam?.length || 0}
      </S.BattlePlayersAgainst>
    </S.Battle>
  );
};

export default Battle;
