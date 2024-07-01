import { forwardRef } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

export interface TextProps extends RNTextProps {
  fontSize?: number;
}

export const Text = forwardRef<any, TextProps>(
  ({ fontSize = 14, style, ...rest }, ref) => {
    const { styles } = useStyles(stylesheet);
    return <RNText ref={ref} style={[styles.text(fontSize), style]} {...rest} />;
  }
);
