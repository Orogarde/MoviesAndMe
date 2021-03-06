import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
export default function App() {
  let persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
