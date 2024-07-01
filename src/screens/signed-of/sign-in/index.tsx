import React from "react";
import { Text } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { LayoutComponent } from "@/components/layout";

export const SignInScreen = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <LayoutComponent style={styles.container}>
      <Text>Home</Text>
    </LayoutComponent>
  );
};
