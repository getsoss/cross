import { View, Text } from "react-native";
import ContainerStyle from "../../../style/DeparturesAppend/ContainerStyle.jsx";
import Btn from "./Btn";

const Container = () => {
  return (
    <View style={ContainerStyle.container}>
      <Text style={ContainerStyle.text}>어디서 만나면 좋을까요?</Text>
      <Btn />
    </View>
  );
};

export default Container;
