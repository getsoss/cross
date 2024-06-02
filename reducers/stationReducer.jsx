import { createSlice } from "@reduxjs/toolkit";

const stationReducer = createSlice({
  name: "place",
  initialState: {
    selectMeetPoint: "",
    departureList: ["안양", "기흥"],
    surroundPlaceList: [
      "음식점",
      "카페",
      "공원",
      "편의점",
      "화장실",
      "주차장",
      "약국",
      "은행",
      "숙박",
      "대형마트",
      "전시관",
    ],
  },
  reducers: {
    setDepartureList: (state, action) => {
      state.departureList = action.payload;
    },
    setSelectMeetPoint: (state, action) => {
      state.selectMeetPoint = action.payload;
    },
  },
});

export const {
  setDepartureList,
  getDepartureList,
  setSelectMeetPoint,
  getSelectMeetPoint,
} = stationReducer.actions;
export default stationReducer.reducer;
