import React from "react";
import * as S from "./styles";

const NotFound = ({ title }) => {
  return <S.NotFound>{title || "Page Not Found"}</S.NotFound>;
};

export default NotFound;
