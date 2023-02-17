import React from "react";
import LeaderboardTable from "./LeaderboardTable";
import LeaderboardVectors from "./LeaderboardVectors";
import * as S from "./LeaderboardVectors/styles";

const Leaderboard = () => {
  return (
    <S.Leaderboard>
      <LeaderboardVectors />
      <LeaderboardTable />
    </S.Leaderboard>
  );
};

export default Leaderboard;
