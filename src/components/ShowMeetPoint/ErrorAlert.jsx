import { Text, View } from "react-native";
import ShowMeetPointStyles from "../../../style/ShowMeetPoint/ShowMeetPointStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ErrorAlert = () => {
  return (
    <View style={ShowMeetPointStyles.errorContainer}>
      <MaterialCommunityIcons
        name="map-marker-off"
        size={24}
        color="black"
        style={ShowMeetPointStyles.errorBackground}
      />
      <Text style={ShowMeetPointStyles.errorMsg}>검색 결과가 없습니다😥</Text>
    </View>
  );
};
