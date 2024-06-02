import { View, StyleSheet, Text } from "react-native-web";
import Container from "../src/components/Container";
import GoogleMap from "../src/components/map/GoogleMap";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Container />
    </View>
  );
};

const MeetPointScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>계산중입니다!</Text>
    </View>
  );
};

const SurroundPlaceScreen = () => {
  return <GoogleMap />;
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 30 },
});

export { HomeScreen, MeetPointScreen, SurroundPlaceScreen };
