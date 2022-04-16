import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Workout } from "../types/data";

export default function WorkoutItem({ item }: { item: Workout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>Duração: {item.duration}</Text>
      <Text style={styles.difficulty}>Dificuldade: {item.difficulty}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "rgba(0,0,0, 0.1)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  name: {
    fontSize: 15,
    fontFamily: "Ubuntu_700Bold",
    marginBottom: 5,
  },
  duration: {
    fontSize: 15,
    fontFamily: "Ubuntu_400Regular",
  },
  difficulty: { fontSize: 15, fontFamily: "Ubuntu_400Regular" },
});
