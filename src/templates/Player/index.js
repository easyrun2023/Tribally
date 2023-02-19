import React from "react";
import * as S from "./styles";
import { rankImage } from "../../utils/ranks";
import StarIMG from "../../assets/images/star.png";
import Image from "../../components/Image";
import PlayerBattlesTable from "../../components/PlayerBattlesTable";
import NotFound from "../../templates/NotFound";
import useLeaderboard from "../../hooks/useLeaderboard";
import { Link, useParams } from "react-router-dom";

const Player = () => {
  const { leaderboard } = useLeaderboard();
  const { clientId } = useParams();

  const player =
    leaderboard && leaderboard.length
      ? leaderboard.find((player) => player?.clientId === clientId)
      : null;

  if (!player) return <NotFound title="Player not found sorry" />;

  const { topRank, name, vstar, battles, rank } = player;

  const isPlayerWithinTopThree =
    topRank === 1 || topRank === 2 || topRank === 3;

  return (
    <S.Player>
      <S.PlayerOverview isActive={isPlayerWithinTopThree}>
        <S.RankImage>
          <Image src={rankImage[rank]} height="100%" width="100%" />
        </S.RankImage>
        <S.PlayerInfoContainer>
          <S.PlayerTier>
            <S.PlayerTierNumber>{topRank}</S.PlayerTierNumber>
            <S.PlayerName>{name}</S.PlayerName>
          </S.PlayerTier>
          <S.PlayerLevel>
            <Image src={StarIMG} height={20} width={20} />
            <S.PlayerStars>{vstar}</S.PlayerStars>
          </S.PlayerLevel>
          <S.PlayerBattles>Battles: {battles?.length || 0}</S.PlayerBattles>
          <S.PlayerBattles>Rank: {rank}</S.PlayerBattles>
        </S.PlayerInfoContainer>
      </S.PlayerOverview>

      <PlayerBattlesTable player={player} />
    </S.Player>
  );
};

export default Player;
