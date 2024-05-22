import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Container from "./src/components/Container";
import "./css/common.css";
import { useEffect } from "react";
import name2code from "./utils/name2code.js";

export default function App() {
  useEffect(() => {
    console.log("===============[TEST]===============");
    console.log(name2code("서울역"));
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
