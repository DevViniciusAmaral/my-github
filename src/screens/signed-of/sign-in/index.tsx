import React from "react";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { LayoutComponent } from "@/components/layout";
import { Image, View } from "react-native";
import githubIcon from "@/assets/images/github-icon.png";
import { TextButton } from "@/components/text-button";
import { Text } from "@/components/base/text";

export const SignInScreen = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <LayoutComponent
      style={styles.container}
      containerStyle={styles.containerStyle}
      footer={
        <TextButton
          style={styles.button}
          textProps={{ style: styles.textButton }}
        >
          ENTRAR
        </TextButton>
      }
    >
      <Image source={githubIcon} resizeMode="contain" style={styles.icon} />

      <View style={styles.horizontal}>
        <Text fontSize={24} style={styles.label}>
          Meu
        </Text>
        <Text fontSize={24} style={styles.bold}>
          GitHub
        </Text>
      </View>
    </LayoutComponent>
  );
};
