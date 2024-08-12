import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import { Home } from "../screens/Home";
import { MealStatistics } from "../screens/MealStatistics";
import { NewMeal } from "../screens/NewMeal";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MealStatistics" component={MealStatistics} />
      <Stack.Screen name="NewMeal" component={NewMeal} />
    </Stack.Navigator>
  );
}
