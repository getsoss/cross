import { createSlice } from "@reduxjs/toolkit";

const stationReducer = createSlice({
  name: "place",
  initialState: {
    selectMeetPoint: "",
    departureList: [],
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
    setSelectMeetPoint: (state, action) => {
      state.selectMeetPoint = action.payload;
    },
    appendDepartureList: (state, action) => {
      state.departureList.push(action.payload);
    },
  },
});

export const { setSelectMeetPoint, appendDepartureList } =
  stationReducer.actions;
export default stationReducer.reducer;
