import React from "react";
import Loading from "../../components/Loading";
import * as S from "./styles";
import LayoutImages from "../../components/LayoutImages";
import useLeaderboard from "../../hooks/useLeaderboard";

const Layout = ({ children }) => {
  const { isLoading } = useLeaderboard();

  if (isLoading) return <Loading />;

  return (
    <S.Layout>
      <S.LayoutChildren>{children}</S.LayoutChildren>
      <LayoutImages />
    </S.Layout>
  );
};

export default Layout;
