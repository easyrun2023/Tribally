import { useSelector } from "react-redux";

const useDashboard = () => {
  const dashboardUsers = useSelector((state) => state.dashboard.data);
  const isLoading = useSelector((state) => state.dashboard.isLoading);

  return {
    dashboardUsers,
    isLoading,
  };
};

export default useDashboard;
