import { WebView } from "react-native-webview";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
G
export default GoogleMap= () => {
  const [location, setLocation] = useState(`안양역`);
  useEffect(() => console.log(location));
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Button
          style={styles.btn}
          onPress={() => setLocation(`${location.split(" ")[0]} 맛집`)}
          title="맛집"
        />
        <Button
          style={styles.btn}
          onPress={() => setLocation(`${location.split(" ")[0]} 놀거리`)}
          title="놀거리"
        />
        <Button
          style={styles.btn}
          onPress={() => setLocation(`${location.split(" ")[0]} 공원`)}
          title="공원"
        />
      </View>
      <WebView
        style={styles.container}
        source={{
          uri: `https://www.google.co.kr/maps/search/${location}/data=!3m1!4b1?hl=ko&entry=ttu`,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  btn: {
    flex: 1,
  },
});