import React from "react";
import * as S from "./styles";

const Image = ({ src, alt, height, width }) => {
  return <S.Image src={src} alt={alt} height={height} width={width} />;
};

export default Image;
