import { WebView } from "react-native-webview";

export default GoogleMap = ({ location }) => {
  return (
    <WebView
      source={{
        uri: `https://www.google.co.kr/maps/search/${location}`,
      }}
    />
  );
};
