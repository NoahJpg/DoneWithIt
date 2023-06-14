import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import "react-native-url-polyfill/auto"

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ChatBotScreen from "./app/screens/ChatBotScreen";

export default function App() {
  return (
    <ChatBotScreen />
  );
}
