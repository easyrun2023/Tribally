import React from "react";
import * as S from "./styles";
import StarIMG from "../../assets/images/star.png";
import Image from "../../components/Image";
import ImageRank from "./ImageRank";

const PlayerRank = ({ topRank, rank, name, vstar, id }) => {
  const isPlayerWithinTopThree =
    topRank === 1 || topRank === 2 || topRank === 3;

  return (
    <S.PlayerRank to={`/player/${id}`} isActive={isPlayerWithinTopThree}>
      <S.PlayerRankNumberName>
        <S.PlayerRankNumber>{topRank}</S.PlayerRankNumber>
        <S.PlayerRankName>{name}</S.PlayerRankName>
      </S.PlayerRankNumberName>
      <S.PlayerRankLevel>
        <S.PlayerRankPoints>
          <Image src={StarIMG} height={20} width={20} />
          <S.PlayerRankPointsNumber>{vstar}</S.PlayerRankPointsNumber>
        </S.PlayerRankPoints>
        <S.PlayerRankLeagueName>{rank}</S.PlayerRankLeagueName>
        <ImageRank right={"-24px"} rank={rank} />
      </S.PlayerRankLevel>
    </S.PlayerRank>
  );
};

export default PlayerRank;
