import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/types";

export type ButtonMealStatusProps = "inDiet" | "outDiet";

export type formDataProps = {
  title: string;
  description: string;
  date: Date;
};

export type NewMealProps = NativeStackScreenProps<
  RootStackParamList,
  "NewMeal"
>;
