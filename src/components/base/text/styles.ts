import { PixelRatio } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  text: (fontSize: number) => ({
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    fontSize: PixelRatio.getFontScale() * fontSize,
  }),
}));
