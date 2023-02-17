import { useSelector } from "react-redux";

const useLeaderboard = () => {
  const leaderboard = useSelector((state) => state.leaderboard.data);
  const isLoading = useSelector((state) => state.leaderboard.isLoading);

  return {
    leaderboard,
    isLoading,
  };
};

export default useLeaderboard;
