import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 

import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";


export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:  () => {
       return <FontAwesome5 name="home" size={24} color="black" />
      }}} />
      <BottomTab.Screen name="Planner" component={PlannerScreen} options={{tabBarIcon:  () => {
       return <Entypo name="add-to-list" size={24} color="black" />
      }}} />
    </BottomTab.Navigator>
  );
}
