import { createStackNavigator } from "@react-navigation/stack";
import { NavigationParamList } from "./NavigationParamList";
import { SignInScreen } from "@/screens/signed-of/sign-in";

const { Navigator, Screen } = createStackNavigator<NavigationParamList>();

export const SignedOffNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignInScreen" component={SignInScreen} />
    </Navigator>
  );
};
