import { appThemes } from "@/theme/AppThemes";
import { breakpoints } from "@/theme/Breakpoints";

type AppThemes = typeof appThemes;
type AppBreakpoints = typeof breakpoints;

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}
