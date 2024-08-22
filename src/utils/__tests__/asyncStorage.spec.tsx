import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealItem } from "../../../__tests__/__mocks__/mealItem";
import { mockMealStorage } from "../../../__tests__/__mocks__/mealStorage";
import {
  createNewMealStorage,
  createStorage,
  DATA_MEAL_STORAGE_KEY,
  getMealStorage,
  getStorage,
  removeMealStorage,
  updateMealStorage,
} from "../asyncStorage";

describe("asyncStorage", () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });
  it("should create and get meal in storage", async () => {
    await createStorage(DATA_MEAL_STORAGE_KEY, JSON.stringify(mockMealStorage));
    const result = await getStorage(DATA_MEAL_STORAGE_KEY);
    expect(result).toEqual(mockMealStorage);
  });

  it("Should return null when storage is empty", async () => {
    const result = await getMealStorage(DATA_MEAL_STORAGE_KEY);
    expect(result).toBe(null);
  });
  it("should return a meal item", async () => {
    await createStorage(DATA_MEAL_STORAGE_KEY, JSON.stringify(mockMealStorage));
    const response = await getMealStorage("1");
    expect(response).toEqual(mockMealStorage[0].data[0]);
  });

  it("should create a new meal in storage when it is empty", async () => {
    await createNewMealStorage(mealItem);
    const response = await getMealStorage("1");
    expect(response).toEqual(mealItem);
  });

  it("should create a new meal in storage when it is not empty", async () => {
    await createStorage(DATA_MEAL_STORAGE_KEY, JSON.stringify(mockMealStorage));
    await createNewMealStorage({
      ...mealItem,
      id: "10",
    });
    const response = await getMealStorage("10");
    expect(response?.id).toBe("10");
  });

  it("should update a meal in storage", async () => {
    await createStorage(DATA_MEAL_STORAGE_KEY, JSON.stringify(mockMealStorage));
    const title = "Refeicão atualizada";
    await updateMealStorage({
      ...mealItem,
      id: "1",
      title,
    });

    const response = await getMealStorage("1");
    expect(response?.title).toBe(title);
  });

  it("should update a meal on different day", async () => {
    await createStorage(DATA_MEAL_STORAGE_KEY, JSON.stringify(mockMealStorage));
    const title = "Refeicão atualizada";
    await updateMealStorage({
      ...mealItem,
      id: "1",
      title,
      hour: "2024-08-01T19:36:57.388Z",
    });

    const response = await getMealStorage("1");
    expect(response?.title).toBe(title);
  });

  it("should remove a meal in storage", async () => {
    await createStorage(DATA_MEAL_STORAGE_KEY, JSON.stringify(mockMealStorage));
    await removeMealStorage("1");

    const response = await getMealStorage("1");

    expect(response).toBeNull();
  });
});
