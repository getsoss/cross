import { ScrollView, Text, TouchableOpacity } from "react-native";
import ShowMeetPointStyles from "../../../style/ShowMeetPoint/ShowMeetPointStyles";
import sec2time from "../../../utils/convert/sec2time.js";
import { useDispatch } from "react-redux";
import { setSelectMeetPoint } from "../../../reducers/stationReducer.jsx";
import { useNavigation } from "@react-navigation/native";

export default MeetPointList = ({ list }) => {
  const dispatch = useDispatch();
  const navigationState = useNavigation();
  const handleSelectMeetPoint = (place) => {
    dispatch(setSelectMeetPoint(`${place.node}역`));
    navigationState.navigate("주변 탐색");
  };
  return (
    <ScrollView style={ShowMeetPointStyles.scrollView}>
      {list.map((place, idx) => (
        <TouchableOpacity
          key={idx}
          style={ShowMeetPointStyles.btn}
          onPress={() => handleSelectMeetPoint(place)}
        >
          <Text
            style={[ShowMeetPointStyles.textNo, ShowMeetPointStyles.text]}
          >{`${String(idx + 1).padStart(2, "0")}.`}</Text>
          <Text
            style={[ShowMeetPointStyles.text, ShowMeetPointStyles.textLabel]}
          >
            {`${place.node}역`}
          </Text>
          <Text style={ShowMeetPointStyles.text}>
            {` [총 이동 시간] ${sec2time(place.totalDistance)} [이동편차] ${
              place.variance / 1000
            }`}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
