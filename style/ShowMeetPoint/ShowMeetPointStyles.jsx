import { StyleSheet } from "react-native";

export default ShowMeetPointStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  errorContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  errorBackground: {
    fontSize: 300,
    opacity: 0.5,
  },
  errorMsg: {
    bottom: 10,
    fontSize: 40,
    backgroundColor: "white",
  },
});
