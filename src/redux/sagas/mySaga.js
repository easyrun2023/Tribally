import { call, put, takeLatest } from "redux-saga/effects";
import { httpsGetLeaderboard } from "../../api/leaderboard";
import { fetchLeaderboard, setLoading } from "../reducers/leaderboard";
import { sagaActions } from "./actions";

function* fetchLeaderboardData(action) {
  try {
    const { data } = yield call(httpsGetLeaderboard);
    yield put(fetchLeaderboard(data));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  } finally {
    yield put(setLoading(false));
  }
}

export default function* mySaga() {
  yield takeLatest(sagaActions.FETCH_LEADERBOARD_DATA, fetchLeaderboardData);
}
