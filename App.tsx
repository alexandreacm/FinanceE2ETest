import React from 'react';

import 'react-native-gesture-handler';

import  Plan  from './src/screens/Plan';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar translucent style="dark" />
      <Plan />
    </>
  );
}
