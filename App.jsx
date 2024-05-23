import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Container from "./src/components/Container";
import "./css/common.css";
import { useEffect } from "react";
import { makeGraph, saveGraphDataFile } from "./utils/graphManager.js";

export default function App() {
  useEffect(() => {
    console.log("===============[TEST]===============");

    saveGraphDataFile(makeGraph());
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
