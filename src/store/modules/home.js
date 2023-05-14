import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
} from "@/services";
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

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
  },
  extraReducers: {
    /* [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log(payload);
      state.goodPriceInfo = payload;
    }, */
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
