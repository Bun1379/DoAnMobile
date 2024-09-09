import { StyleSheet } from 'react-native';
import React from 'react';
import Home from './src/Home/Home';
import Introduce from './src/Introduce/Introduce';
import Login from './src/LoginRegister/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/LoginRegister/Signup';
import ForgotPW from './src/LoginRegister/ForgotPW';
import ResetPW from './src/LoginRegister/ResetPW';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Introduce" component={Introduce} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPW" component={ForgotPW} />
        <Stack.Screen name="ResetPW" component={ResetPW} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
export default App;