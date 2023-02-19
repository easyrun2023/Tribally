import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./templates/Layout";
import Leaderboard from "./templates/Leaderboard";
import { sagaActions } from "./redux/sagas/actions";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./templates/NotFound";
import Player from "./templates/Player";
import ScrollToTop from "./components/ScrollTop";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_LEADERBOARD_DATA });
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/player/:clientId" element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
