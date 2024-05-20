import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./css/common.css";
import Header from "./src/components/Header";
import Container from "./src/components/Container";
import Footer from "./src/components/Footer";

export default function App() {
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
