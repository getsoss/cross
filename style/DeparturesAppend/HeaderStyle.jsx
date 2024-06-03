import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    backgroundColor: '#0091ff',
    position: 'fixed', // 리액트 네이티브에서는 position: 'absolute'를 사용해야 할 수도 있습니다.
    top: 0,
    height: 56, 
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    color: 'white', 
  },
});

export default styles;
