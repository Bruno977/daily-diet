import { DataStorageProps } from "../@types/storage";
import { orderDates } from "./orderDates";

function getTotalMealInSequence(data: DataStorageProps[]) {
  const orderData = orderDates(data);

  let maxSequence = 0;
  const total = orderData.reduce((accumulator, dataItem) => {
    for (const item of dataItem.data) {
      if (item.inDiet) {
        maxSequence = maxSequence + 1;
        accumulator = maxSequence > accumulator ? maxSequence : accumulator;
      } else {
        maxSequence = 0;
      }
    }
    return accumulator;
  }, 0);
  return total;
}

function getTotalMeal(data: DataStorageProps[]) {
  const totalItems = data.reduce(
    (accumulator, dataItem) => {
      for (const item of dataItem.data) {
        if (item.inDiet) {
          accumulator.inDiet += 1;
        } else {
          accumulator.outDiet += 1;
        }
      }

      return accumulator;
    },
    { inDiet: 0, outDiet: 0, mealInSequence: 0 }
  );
  const totalMealsInSequence = getTotalMealInSequence(data);
  const totalMeals = totalItems.inDiet + totalItems.outDiet;
  return {
    percentage: data.length > 0 ? (totalItems.inDiet / totalMeals) * 100 : 0,
    inDiet: data.length > 0 ? totalItems.inDiet : 0,
    outDiet: data.length > 0 ? totalItems.outDiet : 0,
    mealInSequence: data.length > 0 ? totalMealsInSequence : 0,
  };
}

export { getTotalMeal };
