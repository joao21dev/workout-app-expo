import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

import data from "../data.json";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native-gesture-handler";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
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
    fontWeight: "bold",
  },
});
