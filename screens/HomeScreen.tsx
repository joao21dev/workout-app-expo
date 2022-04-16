import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

import data from "../data.json";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native-gesture-handler";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import UbuntuText from "../components/styled/UbuntuText";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <UbuntuText style={styles.header}>New Workoout</UbuntuText>
      <FlatList
        data={data as Workout[]}
        keyExtractor={(item) => item.slug}
        renderItem={WorkoutItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "Ubuntu_700Bold",
  },
});
