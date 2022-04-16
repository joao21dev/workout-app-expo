import { Text } from "react-native";
import React from "react";

export default function UbuntuText(props: Text["props"]) {
  return (
    <Text style={[props.style, { fontFamily: "Ubuntu_700Bold" }]} {...props} />
  );
}
