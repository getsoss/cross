import React from "react";
import { View, Text } from "react-native";
import styles from "../../style/ContainerStyle.jsx";
import Btn from "./Btn";

const Container = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>어디서 만나면 좋을까요?</Text>
      <Btn />
    </View>
  );
};

export default Container;
