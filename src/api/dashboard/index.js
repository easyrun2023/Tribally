import axios from "../axios";

export const httpsGetDashboardLeaderboard = () => axios.get("/leaderboard/origin/arena");
