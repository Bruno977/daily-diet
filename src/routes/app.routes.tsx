import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import { Home } from "../screens/Home";
import { MealStatistics } from "../screens/MealStatistics";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MealStatistics" component={MealStatistics} />
    </Stack.Navigator>
  );
}
