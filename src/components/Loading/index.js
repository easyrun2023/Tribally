import React from "react";
import Image from "../Image";
import * as S from "./styles";
import TrophyIMG from "../../assets/images/trophy.png";

const Loading = () => {
  return (
    <S.Loading>
      <S.Animation>
        <Image src={TrophyIMG} alt="trophy" height={500} width={500} />
      </S.Animation>
    </S.Loading>
  );
};

export default Loading;
