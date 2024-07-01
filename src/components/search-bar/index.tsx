import React, { forwardRef } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { TextInput, TextInputProps } from "../base/text-input";
import { Search } from "lucide-react-native";

interface SearchbarProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export const Searchbar = forwardRef<any, SearchbarProps>(
  ({ containerStyle, style, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);

    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput ref={ref} style={[styles.textInput, style]} {...rest} />
        <Search size={20} color={theme.colors.primary.dark} />
      </View>
    );
  }
);
