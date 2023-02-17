import React from "react";
import Loading from "../../components/Loading";
import useDashboard from "../../hooks/useDashboard";
import * as S from "./styles";
import LayoutImages from "../../components";

const Layout = ({ children }) => {
  const { isLoading } = useDashboard();

  if (isLoading) return <Loading />;

  return (
    <S.Layout>
      {children}
      <LayoutImages />
    </S.Layout>
  );
};

export default Layout;
