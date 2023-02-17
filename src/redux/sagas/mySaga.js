import { call, put, takeLatest } from "redux-saga/effects";
import { httpsGetDashboardLeaderboard } from "../../api/dashboard";
import { fetchDashboard, setLoading } from "../reducers/dashboard";
import { sagaActions } from "./actions";

function* fetchDashboardData(action) {
  try {
    const { data } = yield call(httpsGetDashboardLeaderboard);
    yield put(fetchDashboard(data));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  } finally {
    yield put(setLoading(false));
  }
}

export default function* mySaga() {
  yield takeLatest(sagaActions.FETCH_DASHBOARD_DATA, fetchDashboardData);
}
