import React from "react";
import LeaderboardTable from "../../components/LeaderboardTable";
import LeaderboardVectors from "../../components/LeaderboardVectors";
import * as S from "./styles";

const Leaderboard = () => {
  return (
    <S.Leaderboard>
      <LeaderboardVectors />
      <LeaderboardTable />
    </S.Leaderboard>
  );
};

export default Leaderboard;
