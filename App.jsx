import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Container from "./src/components/Container";
import { useEffect } from "react";
import getSubwayPath from "./utils/api/getSubwayPath";
import { findTopMeetingPoint } from "./utils/findMeetingPoint.js";
import GoogleMap from "./src/components/map/GoogleMap.jsx";
import {FirstScreen, SecondScreen, ThirdScreen} from './pages/TabScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import GoogleMap from ".assets/map/GoogleMap.jsx";
const Tab = createBottomTabNavigator();

export default function App() {
  // useEffect(async () => {
  //   console.log("[경로 가져오기]===========================");
  //   const station_list = await getSubwayPath(["안양", "기흥", "", "1"]);
  //   station_list.map((station) =>
  //     console.log(`${station.startStationName} --> ${station.endStationName}`)
  //   );

  //   console.log("[중간지점 계산]==========================");
  //   const start_station_list = ["복정", "고색", "홍대입구"];
  //   findTopMeetingPoint(start_station_list, 0.5, 10);
  //   console.log("=========================================");
  // }, []);
  return (
    // <View style={styles.container}>
    //   <Header></Header>
    //   <Container></Container>
    //   <Footer></Footer>
    // </View>
    //<GoogleMap />
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="1페이지" component={FirstScreen}/>
        <Tab.Screen name="2페이지" component={SecondScreen}/>
        <Tab.Screen name="3페이지" component={ThirdScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
