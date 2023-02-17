import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], isLoading: true };

const leaderboard = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    fetchLeaderboard(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { fetchLeaderboard, setLoading } = leaderboard.actions;
export default leaderboard.reducer;
