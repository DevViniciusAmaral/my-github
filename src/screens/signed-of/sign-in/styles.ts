import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  containerStyle: {
    padding: 16,
  },

  icon: {
    width: 100,
    height: 100,
  },

  footer: {
    padding: 16,
  },

  button: {
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.text,
  },

  textButton: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary.main,
  },

  horizontal: {
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    gap: 4,
  },

  bold: {
    fontFamily: theme.fonts.bold,
  },
}));
