import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataStorageItemProps, DataStorageProps } from "../@types/storage";
import { isSameDay } from "date-fns";

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

async function updateMealStorage(data: DataStorageItemProps) {
  const response: DataStorageProps[] = await getStorage(DATA_MEAL_STORAGE_KEY);

  if (!response || response.length === 0) {
    return null;
  }

  const updatedDataStorage = response.map((item) => {
    const isSameDate = isSameDay(new Date(item.title), data.hour);
    if (isSameDate) {
      const filteredData = item.data.filter(
        (storedData) => storedData.id !== data.id
      );
      return {
        ...item,
        data: [...filteredData, data],
      };
    }

    const hasDataInStorage = item.data.some(
      (storedData) => storedData.id === data.id
    );

    if (hasDataInStorage) {
      return {
        ...item,
        data: item.data.filter((storedData) => storedData.id !== data.id),
      };
    }
    return item;
  });

  const dayExistsInStorage = updatedDataStorage.some((item) =>
    isSameDay(new Date(item.title), data.hour)
  );

  if (!dayExistsInStorage) {
    updatedDataStorage.push({
      title: data.hour,
      data: [data],
    });
  }

  const finalDataStorage = updatedDataStorage.filter(
    (item) => item.data.length > 0
  );
  await createStorage(DATA_MEAL_STORAGE_KEY, JSON.stringify(finalDataStorage));
}

async function removeMealStorage(id: string) {
  const response: DataStorageProps[] = await getStorage(DATA_MEAL_STORAGE_KEY);

  if (!response || response.length === 0) {
    return null;
  }

  const newData = response.map((dataItem) => {
    return {
      ...dataItem,
      data: dataItem.data.filter((item) => item.id !== id),
    };
  });

  const filteredData = newData.filter((dataItem) => dataItem.data.length > 0);

  await createStorage(DATA_MEAL_STORAGE_KEY, JSON.stringify(filteredData));
}
export {
  createStorage,
  getStorage,
  getMealStorage,
  removeMealStorage,
  updateMealStorage,
};
