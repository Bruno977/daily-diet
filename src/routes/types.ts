export type RootStackParamList = {
  Home: undefined;
  MealStatistics: undefined;
  NewMeal: { mealId: string } | undefined;
  RegisteredMeal: { mealStatus: string };
  MealDetails: { mealId: string };
};
