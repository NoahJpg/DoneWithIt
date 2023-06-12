import React from "react";
import { Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default Screen;
