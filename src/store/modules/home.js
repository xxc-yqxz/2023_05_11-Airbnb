import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));

      // 此处不允许直接使用 getState() 去修改state中的数据，要用dispatch
    });
    // return res;

    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
  extraReducers: {
    /* [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log(payload);
      state.goodPriceInfo = payload;
    }, */
  },
});

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } =
  homeSlice.actions;

export default homeSlice.reducer;
