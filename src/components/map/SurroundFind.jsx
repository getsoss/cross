import { SafeAreaView, ScrollView, View } from "react-native";
import { useState } from "react";
import SurroundFindBtn from "./SurroundFindBtn";
import GoogleMap from "./GoogleMap";
import SurroundFindStyles from "../../../style/SurroundFind/SurroundFindStyles";

export default SurroundFind = () => {
  const [location, setLocation] = useState(`안양역`); // init
  const handlePress = (type) => {
    setLocation(`${location.split(" ")[0]} ${type}`);
  };
  const surroundPlaceList = [
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
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView horizontal={true} style={SurroundFindStyles.scrollView}>
        {surroundPlaceList.map((place, idx) => (
          <SurroundFindBtn key={idx} place={place} handlePress={handlePress} />
        ))}
      </ScrollView>
      <View style={SurroundFindStyles.webViewContainer}>
        <GoogleMap location={location} />
      </View>
    </SafeAreaView>
  );
};
