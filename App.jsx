import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Container from "./src/components/Container";
import "./css/common.css";
import { useEffect } from "react";
import name2code from "./utils/convert/name2code.js";

export default function App() {
  useEffect(() => {
    console.log("===============[TEST]===============");
    const v1 = name2code("서울");
    const v2 = name2code("안양");
    console.log(`${v1.station_nm} --> ${v2.station_nm}`);
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
