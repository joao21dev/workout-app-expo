import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function PlannerScreen({navigation}: NativeStackHeaderProps) {
  useEffect(() => {
    
  }, [])
  return (
    <View>
      <Text>PlannerScreen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
