import { StackScreenProps } from "@react-navigation/stack";
import { NavigationParamList } from "./NavigationParamList";

export type NavigationRootProps<T extends keyof NavigationParamList> =
  StackScreenProps<NavigationParamList, T>;
