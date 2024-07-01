import { forwardRef } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Button = forwardRef<any, TouchableOpacityProps>(
  ({ ...rest }, ref) => (
    <TouchableOpacity ref={ref} activeOpacity={1} {...rest} />
  )
);
