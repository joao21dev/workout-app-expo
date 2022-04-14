import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

import data from "../data.json";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native-gesture-handler";
import { Workout } from "../types/data";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const renderItem = ({ item }: { item: Workout }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <FlatList
        data={data as Workout[]}
        keyExtractor={(item) => item.slug}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
