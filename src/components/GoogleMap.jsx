import { StyleSheet, View } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";

provider = { PROVIDER_GOOGLE };

export default function GoogleMap() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
