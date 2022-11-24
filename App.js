import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/views/Login";
import Home from "./src/views/Home";
import ConsultaRep from "./src/hooks/ConsultaRep";

const Stack = createNativeStackNavigator()

function App() {
    return(
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login" screenOptions={{ 
            headerTintColor: "#fff", 
            headerStyle: { backgroundColor: '#202024'},
            headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ConsultaRep" component={ConsultaRep} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App