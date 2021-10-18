/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react'
 import MainStackNavigator from './src/navigation/AppNavigator'
 import { Provider as StoreProvider } from 'react-redux'
 import store from './src/redux/Store'
 
 export default function App() {
    return (
    <StoreProvider store={store}>
      <MainStackNavigator />
    </StoreProvider>
  )
 }