export type MealItem = {
  id: string;
  hour: string;
  title: string;
  isFreeMeal: boolean;
}

export type MealListItemProps ={
  data: MealItem;
}