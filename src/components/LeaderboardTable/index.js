import React from "react";
import PlayerRank from "../PlayerRank";
import * as S from "./styles";
import useLeaderboard from "../../hooks/useLeaderboard";

const LeaderboardTable = () => {
  const { leaderboard } = useLeaderboard();

  return (
    <S.LeaderboardTable>
      {leaderboard.map(({ topRank, rank, name, vstar, clientId }) => (
        <PlayerRank
          key={clientId}
          id={clientId}
          topRank={topRank}
          rank={rank}
          name={name}
          vstar={vstar}
        />
      ))}
    </S.LeaderboardTable>
  );
};

export default LeaderboardTable;
