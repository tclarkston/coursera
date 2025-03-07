import * as React from "react";
import { Text, View } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: "#F4CE14",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "black",
        }}
      >
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}
