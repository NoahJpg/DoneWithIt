import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";

import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return <MessagesScreen />;
}
