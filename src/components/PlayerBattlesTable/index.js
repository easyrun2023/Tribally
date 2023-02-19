import React from "react";
import Battle from "../Battle";
import * as S from "./styles";

const PlayerBattlesTable = ({ player }) => {
  return player.battles && player.battles.length ? (
    <S.PlayerBatttlesTable>
      <S.PlayerName>{player.name}'s Battles</S.PlayerName>
      {player.battles.map(
        ({
          battleUuid,
          result,
          playerTeam,
          opponentTeam,
          startTimestamp,
          endTimestamp,
          battleType,
        }) => (
          <Battle
            key={battleUuid}
            battleUuid={battleUuid}
            result={result}
            playerTeam={playerTeam}
            opponentTeam={opponentTeam}
            startTimestamp={startTimestamp}
            endTimestamp={endTimestamp}
            battleType={battleType}
          />
        )
      )}
    </S.PlayerBatttlesTable>
  ) : null;
};

export default PlayerBattlesTable;
