import { StyleSheet } from 'react-native';
import React from 'react';
import Home from './src/screens/Home/Home';
import UserProfile from './src/screens/User/UserProfile';
import Login from './src/screens/LoginRegister/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/LoginRegister/Signup';
import ForgotPW from './src/screens/LoginRegister/ForgotPW';
import ResetPW from './src/screens/LoginRegister/ResetPW';
import VerifyUser from './src/screens/LoginRegister/VerifyUser';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPW" component={ForgotPW} />
        <Stack.Screen name="ResetPW" component={ResetPW} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VerifiedUser" component={VerifyUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
export default App;