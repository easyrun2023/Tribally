import React from "react";
import * as S from "./styles";

const LayoutImage = ({ children, top, left, bottom, right, style }) => {
  return (
    <S.LayoutImage
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      style={style}
    >
      {children}
    </S.LayoutImage>
  );
};

export default LayoutImage;
