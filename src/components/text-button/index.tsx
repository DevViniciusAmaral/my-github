import { forwardRef } from "react";
import { Button } from "../base/button";
import { Text, TextProps } from "../base/text";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  TouchableOpacityProps,
} from "react-native";
import { useStyles } from "react-native-unistyles";

interface TextButtonProps extends TouchableOpacityProps {
  textProps?: TextProps;
  isLoading?: boolean;
  activityIndicatorProps?: ActivityIndicatorProps;
}

export const TextButton = forwardRef<any, TextButtonProps>(
  (
    { textProps, isLoading, children, activityIndicatorProps, ...rest },
    ref
  ) => {
    const { theme } = useStyles();
    return (
      <Button ref={ref} {...rest}>
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={theme.colors.primary.main}
            {...activityIndicatorProps}
          />
        ) : (
          <Text {...textProps}>{children}</Text>
        )}
      </Button>
    );
  }
);
