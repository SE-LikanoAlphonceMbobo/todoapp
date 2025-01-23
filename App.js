import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';

// styled components
import {Container} from "./styles/appStyles";

export default function App() {
  return (
    <Container>
      <Text>Welcome to React Native!!</Text>
      <Button title="Alert" onPress={() => alert("Hi, Likano")} />
      <StatusBar style="auto" />
    </Container>
  );
}


