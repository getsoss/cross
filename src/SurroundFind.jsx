import { SafeAreaView, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import SurroundFindBtn from "./components/map/SurroundFindBtn";
import GoogleMap from "./components/map/GoogleMap";
import SurroundFindStyles from "../style/SurroundFind/SurroundFindStyles";
import { useSelector } from "react-redux";
import { useNavigationState } from "@react-navigation/native";

export default SurroundFind = () => {
  const store = useSelector((state) => state.place);
  const navigationState = useNavigationState((state) => state);
  const [location, setLocation] = useState(store.selectMeetPoint);
  const handlePress = (type) => {
    setLocation(`${store.selectMeetPoint} 주변 ${type}`);
  };
  const surroundPlaceList = store.surroundPlaceList;
  useEffect(() => {
    setLocation(() => store.selectMeetPoint);
  }, [navigationState.index]);
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
