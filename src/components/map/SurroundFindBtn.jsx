import { Text, TouchableOpacity } from "react-native";
import SurroundBtnStyles from "../../../style/SurroundFind/SurroundBtnStyles";

export default SurroundFindBtn = ({ handlePress, place }) => {
  return (
    <TouchableOpacity
      style={SurroundBtnStyles.button}
      onPress={() => handlePress(place)}
    >
      <Text style={SurroundBtnStyles.buttonText}>{place}</Text>
    </TouchableOpacity>
  );
};
