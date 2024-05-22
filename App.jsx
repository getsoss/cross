import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import "./css/common.css";

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
