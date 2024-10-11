//rnf - react native functional component
import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "coral" },
          headerTitleStyle: { fontweight: "600" },
          headerTintColor: "Cyan",
        }}
      />
      <Stack.Screen name="settings" options={{ title: "About me" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
}