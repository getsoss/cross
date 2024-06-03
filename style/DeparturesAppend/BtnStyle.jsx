import { StyleSheet } from "react-native";

export const btnStyles = StyleSheet.create({
  btn: {
    width: "100%",
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: "#007bff",
    backgroundColor: "#007bff",
    borderRadius: 4,
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
  },
  btnHover: {
    backgroundColor: "#007bff",
    color: "white",
  },
});

export const modalStyles = StyleSheet.create({
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bbackgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    width: 300,
    zIndex: 3,
  },
  modalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalClose: {
    fontSize: 16,
    color: "red",
  },
  modalTextInput: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    fontSize: 14,
  },
  modalBottom: {
    textAlign: "right",
  },
  modalAppend: {
    backgroundColor: "#007bff",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    textAlign: "center",
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
