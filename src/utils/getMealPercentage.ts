import { DataStorageProps } from "../@types/storage";

function getMealPercentage(data: DataStorageProps[]) {
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
    { inDiet: 0, outDiet: 0 }
  );
  const totalMeals = totalItems.inDiet + totalItems.outDiet;
  return (totalItems.inDiet / totalMeals) * 100;
}

export { getMealPercentage };
