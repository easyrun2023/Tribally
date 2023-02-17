import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], isLoading: true };

const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchDashboard(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { fetchDashboard, setLoading } = dashboard.actions;
export default dashboard.reducer;
