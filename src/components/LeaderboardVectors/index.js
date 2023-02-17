import React from "react";
import VectorIMG from "../../assets/images/vector.png";
import WoodIMG from "../../assets/images/wood.png";
import StarIMG from "../../assets/images/star.png";
import * as S from "./styles";
import Image from "../Image";

const LeaderboardVectors = () => {
  return (
    <S.LeaderboardVectors>
      <S.WoodContainer image={WoodIMG}>
        <S.LeaderboardText>Leaderboard</S.LeaderboardText>
        <S.Season>
          <Image src={StarIMG} alt="star" />
          <S.SeasonText>SEASON 1</S.SeasonText>
          <Image src={StarIMG} alt="star" />
        </S.Season>
      </S.WoodContainer>
      <S.VectorContainer image={VectorIMG} />
    </S.LeaderboardVectors>
  );
};

export default LeaderboardVectors;
