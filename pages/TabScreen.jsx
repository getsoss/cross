import { View, StyleSheet,Text } from "react-native-web";
import Container from "../src/components/Container";
import Btn from "../src/components/Btn";
import GoogleMap from "../src/components/map/GoogleMap";

export const FirstScreen = () => {
    return (
        <View style={styles.container}>
            <Container/>
            <Btn/>
        </View>
    );
}

export const SecondScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>계산중입니다!</Text>
        </View>
    );
}

export const ThirdScreen = () => {
    return (
        <GoogleMap/>
    );
};

const styles = StyleSheet.create({
    container: {flex:1, justifyContent: "center",alignItems:"center"},
    text: {fontSize:30}
})