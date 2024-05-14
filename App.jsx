import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import Button from './components/Button';
import '/Users/soss/Desktop/cross/cross-app/css/common.css';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Container>
        
      </Container>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
