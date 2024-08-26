import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import { Home } from "../screens/Home";
import { MealStatistics } from "../screens/MealStatistics";
import { NewMeal } from "../screens/NewMeal";
import { RegisteredMeal } from "../screens/RegisteredMeal";
import { MealDetails } from "../screens/MealDetails";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        name="MealStatistics"
        component={MealStatistics}
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        name="NewMeal"
        component={NewMeal}
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        name="RegisteredMeal"
        component={RegisteredMeal}
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetails}
        options={{ animation: "fade" }}
      />
    </Stack.Navigator>
  );
}
