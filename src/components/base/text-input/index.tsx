import { forwardRef } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

export interface TextInputProps extends RNTextInputProps {
  fontSize?: number;
}

export const TextInput = forwardRef<any, TextInputProps>(
  ({ fontSize = 14, style, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);
    return (
      <RNTextInput
        ref={ref}
        autoComplete="off"
        autoCapitalize="none"
        style={[styles.textInput(fontSize), style]}
        placeholderTextColor={theme.colors.primary.dark}
        {...rest}
      />
    );
  }
);
