import React from "react";
import { Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
  },
});

export default Screen;
