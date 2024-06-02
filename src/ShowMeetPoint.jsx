import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import ShowMeetPointStyles from "../style/ShowMeetPoint/ShowMeetPointStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default ShowMeetPoint = ({ locationList }) => {
  useEffect(() => {}, []);
  return (
    <View style={ShowMeetPointStyles.container}>
      {locationList !== undefined &&
        locationList.map((place, idx) => <Text key={idx}>{idx + place}</Text>)}
      {locationList === undefined && (
        <View style={ShowMeetPointStyles.errorContainer}>
          <MaterialCommunityIcons
            name="map-marker-off"
            size={24}
            color="black"
            style={ShowMeetPointStyles.errorBackground}
          />
          <Text style={ShowMeetPointStyles.errorMsg}>
            검색 결과가 없습니다😥
          </Text>
        </View>
      )}
    </View>
  );
};
