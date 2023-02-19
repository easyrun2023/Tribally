import React from "react";
import * as S from "./styles";

import Image from "../Image";
import { rankImage } from "../../utils/ranks";

const ImageRank = ({ top, left, bottom, right, rank }) => {
  return (
    <S.PlayerRankLeague top={top} left={left} bottom={bottom} right={right}>
      <Image src={rankImage[rank]} height="100%" width="100%" />
    </S.PlayerRankLeague>
  );
};

export default ImageRank;
