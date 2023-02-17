import axios from "../axios";

export const httpsGetLeaderboard = () => axios.get("/leaderboard/origin/arena");
