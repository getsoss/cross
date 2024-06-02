import { WebView } from "react-native-webview";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useEffect, useState } from "react";

export default GoogleMap = () => {
  const [location, setLocation] = useState(`안양역`);
  useEffect(() => console.log(location));

  const handlePress = (type) => {
    setLocation(`${location.split(" ")[0]} ${type}`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.yellowButton]}
          onPress={() => handlePress("맛집")}
        >
          <Text style={styles.buttonText}>맛집</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cyanButton]}
          onPress={() => handlePress("놀거리")}
        >
          <Text style={styles.buttonText}>놀거리</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.greenButton]}
          onPress={() => handlePress("공원")}
        >
          <Text style={styles.buttonText}>공원</Text>
        </TouchableOpacity>
      </View> */}
      <ScrollView horizontal={true} style={styles.scrollView} >
      <TouchableOpacity
          style={[styles.button, styles.yellowButton]}
          onPress={() => handlePress("맛집")}
        >
          <Text style={styles.buttonText}>맛집</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cyanButton]}
          onPress={() => handlePress("놀거리")}
        >
          <Text style={styles.buttonText}>놀거리</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.greenButton]}
          onPress={() => handlePress("공원")}
        >
          <Text style={styles.buttonText}>공원</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.webViewContainer}>
        <WebView
          style={styles.webView}
          source={{
            uri: `https://www.google.co.kr/maps/search/${location}`,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  scrollView:{
    marginTop: 50,
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  yellowButton: {
    backgroundColor: "#f0d264",
  },
  cyanButton: {
    backgroundColor: "#7fccde",
  },
  greenButton: {
    backgroundColor: "#9abf7f",
  },
  webViewContainer: {
    flex: 4, // 웹뷰가 더 많은 공간을 차지하게 설정
  },
  webView: {
    flex: 1,
  },
});

// import { WebView } from "react-native-webview";
// import { SafeAreaView, StyleSheet, View, Alert } from "react-native";
// import { useEffect, useState } from "react";

// export default GoogleMap = () => {
//   const [location, setLocation] = useState(`안양역`);
//   useEffect(() => console.log(location));

//   const htmlContent =    `<!DOCTYPE html>
//   <html>
//   <head>
//     <style>
//       /* 기본 설정 */
// * {
// box-sizing: border-box;
// }
// body {
// margin: 0;
// background: #eaedf1;
// font-family: 'Lato', sans-serif;
// }

// /* 버튼 스타일 */
// a[class*="btn"] {text-decoration: none;}
// input[class*="btn"],
// button[class*="btn"] {border: 0;}

// /* .btn-two 스타일 */
// .btn-two {
// color: white;
// padding: 15px 25px;
// display: inline-block;
// border: 1px solid rgba(0,0,0,0.21);
// border-bottom-color: rgba(0,0,0,0.34);
// text-shadow: 0 1px 0 rgba(0,0,0,0.15);
// box-shadow: 0 1px 0 rgba(255,255,255,0.34) inset,
//             0 2px 0 -1px rgba(0,0,0,0.13),
//             0 3px 0 -1px rgba(0,0,0,0.08),
//             0 3px 13px -1px rgba(0,0,0,0.21);
// }
// .btn-two:active {
// top: 1px;
// border-color: rgba(0,0,0,0.34) rgba(0,0,0,0.21) rgba(0,0,0,0.21);
// box-shadow: 0 1px 0 rgba(255,255,255,0.89), 0 1px rgba(0,0,0,0.05) inset;
// position: relative;
// }

// /* 색상 및 그림자 */
// .btn.green, .btn-two.green {
// background-color: #9abf7f;
// }
// .btn.green {box-shadow: 0px 4px 0px #87a86f;}
// .btn.green:active {box-shadow: 0 0 #87a86f; background-color: #87a86f;}
// /* 색상 및 그림자 */
// .btn.yellow, .btn-two.yellow {
// background-color: #f0d264;
// }
// .btn.yellow {box-shadow: 0px 4px 0px #d1b757;}
// .btn.yellow:active {box-shadow: 0 0 #d1b757; background-color: #d6bb59;}

// .btn.cyan, .btn-two.cyan {
// background-color: #7fccde;
// }
// .btn.cyan {box-shadow: 0px 4px 0px #73b9c9;}
// .btn.cyan:active {box-shadow: 0 0 #73b9c9; background-color: #70b4c4;}

// /* 모서리 둥글게 */
// .rounded {
// border-radius: 10px;
// }

//     </style>
//   </head>
//   <body>
//     <button class="btn-two yellow rounded" onclick="sendLocation('맛집')">맛집</button>
//     <button class="btn-two cyan rounded" onclick="sendLocation('놀거리')">놀거리</button>
//     <button class="btn-two green rounded" onclick="sendLocation('공원')">공원</button>
//     <script>
//       function sendLocation(type) {
//         window.ReactNativeWebView.postMessage(type);
//       }
//     </script>
//   </body>
//   </html>
//   `
// ;

//   const onMessage = (event) => {
//     const type = event.nativeEvent.data;
//     setLocation(`${location.split(" ")[0]} ${type}`);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <WebView
//         style={styles.container}
//         source={{ html: htmlContent }}
//         onMessage={onMessage}
//       />
//       <WebView
//         style={styles.container}
//         source={{
//           uri: `https://www.google.co.kr/maps/search/${location}/data=!3m1!4b1?hl=ko&entry=ttu`,
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
// });
// import { WebView } from "react-native-webview";
// import { SafeAreaView, StyleSheet, View } from "react-native";
// import { useEffect, useState } from "react";

// export default GoogleMap = () => {
//   const [location, setLocation] = useState(`안양역`);
//   useEffect(() => console.log(location));

//   const htmlContent = `<!DOCTYPE html>
//   <html>
//   <head>
//     <style>
//       /* 기본 설정 */
//       * {
//         box-sizing: border-box;
//       }
//       body {
//         margin: 0;
//         background: #eaedf1;
//         font-family: 'Lato', sans-serif;
//       }

//       /* 버튼 스타일 */
//       a[class*="btn"] {text-decoration: none;}
//       input[class*="btn"],
//       button[class*="btn"] {border: 0;}

//       /* .btn-two 스타일 */
//       .btn-two {
//         color: white;
//         padding: 15px 25px;
//         display: inline-block;
//         border: 1px solid rgba(0,0,0,0.21);
//         border-bottom-color: rgba(0,0,0,0.34);
//         text-shadow: 0 1px 0 rgba(0,0,0,0.15);
//         box-shadow: 0 1px 0 rgba(255,255,255,0.34) inset,
//                     0 2px 0 -1px rgba(0,0,0,0.13),
//                     0 3px 0 -1px rgba(0,0,0,0.08),
//                     0 3px 13px -1px rgba(0,0,0,0.21);
//       }
//       .btn-two:active {
//         top: 1px;
//         border-color: rgba(0,0,0,0.34) rgba(0,0,0,0.21) rgba(0,0,0,0.21);
//         box-shadow: 0 1px 0 rgba(255,255,255,0.89), 0 1px rgba(0,0,0,0.05) inset;
//         position: relative;
//       }

//       /* 색상 및 그림자 */
//       .btn.green, .btn-two.green {
//         background-color: #9abf7f;
//       }
//       .btn.green {box-shadow: 0px 4px 0px #87a86f;}
//       .btn.green:active {box-shadow: 0 0 #87a86f; background-color: #87a86f;}
//       /* 색상 및 그림자 */
//       .btn.yellow, .btn-two.yellow {
//         background-color: #f0d264;
//       }
//       .btn.yellow {box-shadow: 0px 4px 0px #d1b757;}
//       .btn.yellow:active {box-shadow: 0 0 #d1b757; background-color: #d6bb59;}

//       .btn.cyan, .btn-two.cyan {
//         background-color: #7fccde;
//       }
//       .btn.cyan {box-shadow: 0px 4px 0px #73b9c9;}
//       .btn.cyan:active {box-shadow: 0 0 #73b9c9; background-color: #70b4c4;}

//       /* 모서리 둥글게 */
//       .rounded {
//         border-radius: 10px;
//       }

//     </style>
//   </head>
//   <body>
//     <button class="btn-two yellow rounded" onclick="sendLocation('맛집')">맛집</button>
//     <button class="btn-two cyan rounded" onclick="sendLocation('놀거리')">놀거리</button>
//     <button class="btn-two green rounded" onclick="sendLocation('공원')">공원</button>
//     <script>
//       function sendLocation(type) {
//         window.ReactNativeWebView.postMessage(type);
//       }
//     </script>
//   </body>
//   </html>`;

//   const onMessage = (event) => {
//     const type = event.nativeEvent.data;
//     setLocation(`${location.split(" ")[0]} ${type}`);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <WebView
//         style={styles.topContainer}
//         source={{ html: htmlContent }}
//         onMessage={onMessage}
//       />
//       <WebView
//         style={styles.bottomContainer}
//         source={{
//           uri: `https://www.google.co.kr/maps/search/${location}/data=!3m1!4b1?hl=ko&entry=ttu`,
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   topContainer: { flex: 1 },
//   bottomContainer: { flex: 4 },
//   webview:{flex:1},
// });
