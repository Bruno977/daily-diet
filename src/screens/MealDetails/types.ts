import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/types";
import { DataStorageItemProps } from "../../@types/storage";

export type MealDetailsProps = NativeStackScreenProps<RootStackParamList, "MealDetails">;

export type MealProps = {
  title: string;
  data: DataStorageItemProps;
}