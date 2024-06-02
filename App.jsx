// import { useEffect } from "react";
// import getSubwayPath from "./utils/api/getSubwayPath";
// import { findTopMeetingPoint } from "./utils/findMeetingPoint.js";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  HomeScreen,
  MeetPointScreen,
  SurroundPlaceScreen,
} from "./src/TabScreen";
import NavStyles from "./style/NavStyle";

const Tab = createBottomTabNavigator();
const TabIcon = ({ name }) => {
  return <MaterialCommunityIcons name={name} size={30} />;
};

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ tabBarLabelStyle: NavStyles.screenLabelText }}
      >
        <Tab.Screen
          name="출발지 설정"
          component={HomeScreen}
          options={{
            tabBarLabel: "인원 추가",
            tabBarIcon: () => <TabIcon name={"account-multiple-plus"} />,
          }}
        />
        <Tab.Screen
          name="여기서 만나요!"
          component={MeetPointScreen}
          options={{
            tabBarLabel: "중간 장소",
            tabBarIcon: () => <TabIcon name={"map-marker"} />,
          }}
        />
        <Tab.Screen
          name="주변 탐색"
          component={SurroundPlaceScreen}
          options={{
            tabBarLabel: "주변 장소",
            tabBarIcon: () => <TabIcon name={"map-outline"} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
