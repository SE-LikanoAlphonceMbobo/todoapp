import { StatusBar } from 'expo-status-bar';
import React from 'react';

// styled components
import {Container} from "./styles/appStyles";
// User-defined components
import Home from './components/Home';


export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
}




