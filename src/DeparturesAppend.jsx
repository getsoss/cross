import React from "react";
import { View, StyleSheet } from "react-native";
import Container from "./components/DeparturesAppend/Container";

export default DeparturesAppend = () => {
  return (
    <View style={styles.container}>
      <Container />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // 전체 화면을 차지하도록 함
    justifyContent: "center", // 세로 중앙 정렬
    alignItems: "center", // 가로 중앙 정렬 (필요에 따라 제거 가능)
  },
});
