import React from "react";
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UnistylesRuntime } from "react-native-unistyles";
import { StatusBar } from "expo-status-bar";

interface LayoutComponentProps extends ScrollViewProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  enablePaddingTop?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export const LayoutComponent = ({
  header,
  footer,
  children,
  scrollEnabled,
  containerStyle,
  enablePaddingTop = true,
  ...rest
}: LayoutComponentProps) => {
  const { top } = useSafeAreaInsets();
  const { styles } = useStyles(stylesheet);

  const { themeName } = UnistylesRuntime;
  const statusBarStyle = themeName === "light" ? "dark" : "light";

  const paddingTop = enablePaddingTop ? top : 0;

  return (
    <View style={[styles.container(paddingTop), containerStyle]}>
      <StatusBar translucent style={statusBarStyle} />

      {header && <>{header}</>}

      {scrollEnabled ? (
        <ScrollView
          {...rest}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View {...rest}>{children}</View>
      )}

      {footer && <>{footer}</>}
    </View>
  );
};
