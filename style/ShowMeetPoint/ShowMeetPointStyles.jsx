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
  text: {
    fontSize: 20,
    height: 50,
    color: "white",
    lineHeight: 50,
  },
  textNo: {
    paddingHorizontal: 5,
    backgroundColor: "black",
  },
  textLabel: {
    paddingHorizontal: 5,
    backgroundColor: "gray",
  },
  btn: {
    margin: 4,
    backgroundColor: "#4285F4",
    flexDirection: "row",
  },
  scrollView: {
    width: "100%",
  },
});
