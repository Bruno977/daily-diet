import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataStorageProps } from "../@types/storage";

export const DATA_MEAL_STORAGE_KEY = "@daily-diet:data";
async function createStorage(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

async function getStorage(key: string) {
  const response = await AsyncStorage.getItem(key);
  return response ? JSON.parse(response) : [];
}

async function getMealStorage(id: string) {
  const response: DataStorageProps[] = await getStorage(DATA_MEAL_STORAGE_KEY);

  if (!response || response.length === 0) {
    return null;
  }

  for (const data of response) {
    const foundItem = data.data.find((item) => item.id === id);
    if (foundItem) {
      return {
        description: foundItem.description,
        hour: foundItem.hour,
        id: foundItem.id,
        inDiet: foundItem.inDiet,
        title: foundItem.title,
      };
    }
  }

  return null;
}
export { createStorage, getStorage, getMealStorage };
