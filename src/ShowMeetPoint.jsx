import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { findTopMeetingPoint } from "../utils/findMeetingPoint";
import MeetPointList from "./components/ShowMeetPoint/MeetPointList";
import ErrorAlert from "./components/ShowMeetPoint/ErrorAlert";
import ShowMeetPointStyles from "../style/ShowMeetPoint/ShowMeetPointStyles";

export default ShowMeetPoint = () => {
  const departureList = useSelector((state) => state.place.departureList);
  const [rankDepartureList, setRankDepartureList] = useState(undefined);
  useEffect(() => {
    const initList = async () => {
      const list = await findTopMeetingPoint(departureList, 0.5, 20);
      if (list) setRankDepartureList(list);
    };
    initList();
  }, []);

  return (
    <View style={ShowMeetPointStyles.container}>
      {rankDepartureList !== undefined && (
        <MeetPointList list={rankDepartureList} />
      )}
      {rankDepartureList === undefined && <ErrorAlert />}
    </View>
  );
};
