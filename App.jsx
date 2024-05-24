import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Container from "./src/components/Container";
import "./css/common.css";
import { useEffect } from "react";
import getSubwayPath from "./utils/api/getSubwayPath";
import { findTopMeetingPoint } from "./utils/findMeetingPoint.js";

export default function App() {
  useEffect(async () => {
    console.log("====================[TEST]====================");

    const response = await getSubwayPath(["안양", "기흥", "", "2", "1"]);
    const station_list = response.route.sPath[0].pathList;
    station_list.map((station) =>
      console.log(`${station.startStationName} --> ${station.endStationName}`)
    );
    console.log(getSubwayPath(["안양", "기흥", "", "2", "1"]));

    console.log("==============================================");
    findTopMeetingPoint(["복정", "고색", "홍대입구"], 0.5, 10);
    console.log("==============================================");
  }, []);
  return (
    <View style={styles.container}>
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </View>
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
