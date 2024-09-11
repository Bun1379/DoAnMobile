import { StyleSheet } from 'react-native';
import React from 'react';
import Home from './src/screens/Home/Home';
import Introduce from './src/screens/Introduce/Introduce';
import Login from './src/screens/LoginRegister/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/LoginRegister/Signup';
import ForgotPW from './src/screens/LoginRegister/ForgotPW';
import ResetPW from './src/screens/LoginRegister/ResetPW';
import EnterOTP from './src/screens/LoginRegister/EnterOTP';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Introduce" component={Introduce} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPW" component={ForgotPW} />
        <Stack.Screen name="ResetPW" component={ResetPW} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EnterOTP" component={EnterOTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
export default App;