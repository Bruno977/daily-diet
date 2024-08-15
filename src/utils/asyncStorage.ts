import AsyncStorage from "@react-native-async-storage/async-storage";

export const DATA_MEAL_STORAGE_KEY = "@daily-diet:data"
async function createStorage(key: string, value: string){
  await AsyncStorage.setItem(key, value)
}

async function getStorage(key: string){
  const response = await AsyncStorage.getItem(key)
  return response ? JSON.parse(response) : [];
}
export {createStorage, getStorage}