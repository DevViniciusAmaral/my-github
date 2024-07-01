import { appThemes } from "./AppThemes";
import { breakpoints } from "./Breakpoints";
import { UnistylesRegistry } from "react-native-unistyles";

UnistylesRegistry.addBreakpoints(breakpoints).addThemes(appThemes).addConfig({
  initialTheme: "light",
  adaptiveThemes: true,
});
