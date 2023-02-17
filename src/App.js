import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./templates/Layout";
import Leaderboard from "./templates/Leaderboard";
import { sagaActions } from "./redux/sagas/actions";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_DASHBOARD_DATA });
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Leaderboard />} />
      </Routes>
    </Layout>
  );
};

export default App;
