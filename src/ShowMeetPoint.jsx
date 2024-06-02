import { useEffect } from "react";
import { Text, View } from "react-native";
import ShowMeetPointStyles from "../style/ShowMeetPoint/ShowMeetPointStyles";

export default ShowMeetPoint = ({ locationList }) => {
  useEffect(() => {}, []);
  return (
    <View style={ShowMeetPointStyles.container}>
      {locationList !== undefined &&
        locationList.map((place, idx) => <Text key={idx}>{idx + place}</Text>)}
      {locationList === undefined && <Text>검색 결과가 없습니다😥</Text>}
    </View>
  );
};
