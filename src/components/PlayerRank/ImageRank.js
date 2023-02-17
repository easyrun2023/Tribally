import React from "react";
import * as S from "./styles";

import BearRankIMG from "../../assets/images/ranks/bear.png";
import BoarRankIMG from "../../assets/images/ranks/boar.png";
import ChallengerRankIMG from "../../assets/images/ranks/challenger.png";
import ChickRankIMG from "../../assets/images/ranks/chick.png";
import DragonRankIMG from "../../assets/images/ranks/dragon.png";
import EggRankIMG from "../../assets/images/ranks/egg.png";
import HareRankIMG from "../../assets/images/ranks/hare.png";
import TigerRankIMG from "../../assets/images/ranks/tiger.png";
import WolfRankIMG from "../../assets/images/ranks/wolf.png";

import Image from "../Image";

const ImageRank = ({ top, left, bottom, right, rank }) => {
  const rankImage = {
    Bear: BearRankIMG,
    Boar: BoarRankIMG,
    Challenger: ChallengerRankIMG,
    Chick: ChickRankIMG,
    Dragon: DragonRankIMG,
    Egg: EggRankIMG,
    Hare: HareRankIMG,
    Tiger: TigerRankIMG,
    Wolf: WolfRankIMG,
  };

  return (
    <S.PlayerRankLeague top={top} left={left} bottom={bottom} right={right}>
      <Image src={rankImage[rank]} height="100%" width="100%" />
    </S.PlayerRankLeague>
  );
};

export default ImageRank;
