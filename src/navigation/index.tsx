import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SignedOffNavigator } from "./SignedOffNavigator";

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <SignedOffNavigator />
    </NavigationContainer>
  );
}
