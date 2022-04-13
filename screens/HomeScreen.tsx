import { View, Text, Button } from "react-native";
import React from "react";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Planner" onPress={() => navigation.navigate("Planner")} />
    </View>
  );
}
