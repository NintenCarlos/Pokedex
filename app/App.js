import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import RecoverPassword from "./screens/recoverPassword";
import PKMNList from "./screens/PKMNList";
import Unique from "./screens/Unique";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Login"
               component={Login}
               options={{
                  headerShown: false,
               }}
            />

            <Stack.Screen
               name="Profile"
               component={Profile}
               options={{
                  headerShown: false,
               }}
            />

            <Stack.Screen
               name="Register"
               component={Register}
               options={{
                  headerShown: false,
               }}
            />

            <Stack.Screen
               name="RecoverPassword"
               component={RecoverPassword}
               options={{
                  headerShown: false,
               }}
            />

            <Stack.Screen
               name="Unique"
               component={Unique}
               options={{
                  headerShown: false,
               }}
            />

            <Stack.Screen
               name="List"
               component={PKMNList}
               options={{
                  headerShown: false,
               }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default App;
