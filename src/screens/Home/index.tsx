import { Plus } from "phosphor-react-native";
import { Button } from "../../components/Button";
import { DietButton } from "../../components/DietButton";
import { Header } from "../../components/Header";
import * as S from "./styles";
import { SectionList } from "react-native";
import { MealListItem } from "../../components/MealList/MealListItem";
import { MealListTitle } from "../../components/MealList/MealListTitle";
import { MealListEmpty } from "../../components/MealList/MealListEmpty";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { DATA_MEAL_STORAGE_KEY, getStorage } from "../../utils/asyncStorage";
import { DataStorageProps } from "../../@types/storage";
import { orderDates } from "../../utils/orderDates";
import { getTotalMeal } from "../../utils/getTotalMeal";

export const HOME_DIET_BUTTON_TEST_ID = "HomeDietButton";
export const HOME_NEW_MEAL_TEST_ID = "HomeNewMeal";
export function Home() {
  const insets = useSafeAreaInsets();
  const [mealList, setMealList] = useState<DataStorageProps[] | []>([]);
  const [percentage, setPercentage] = useState(0);
  const { navigate } = useNavigation();

  async function getMealStorage() {
    try {
      const response = (await getStorage(
        DATA_MEAL_STORAGE_KEY
      )) as DataStorageProps[];
      const { percentage } = getTotalMeal(response);
      setPercentage(percentage);
      setMealList(orderDates(response));
    } catch (error) {
      console.error("Error get meal", error);
    }
  }
  useFocusEffect(
    useCallback(() => {
      getMealStorage();
    }, [])
  );

  return (
    <>
      <SectionList
        sections={mealList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealListItem data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <MealListTitle title={title} />
        )}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: insets.top + 24,
          paddingBottom: insets.bottom + 120,
          paddingLeft: insets.left + 24,
          paddingRight: insets.right + 24,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Header />
            <DietButton
              testID={HOME_DIET_BUTTON_TEST_ID}
              onPress={() => navigate("MealStatistics")}
              percentage={percentage}
            />
            <S.MealTitle>Refeições</S.MealTitle>
            <Button
              testID={HOME_NEW_MEAL_TEST_ID}
              title="Nova Refeição"
              icon={<Plus />}
              onPress={() => navigate("NewMeal")}
            />
          </>
        }
        ListEmptyComponent={<MealListEmpty />}
      />

      <S.GradientOverlay
        colors={["rgba(250, 250, 250, 0)", "rgba(250, 250, 250, 1)"]}
      />
    </>
  );
}
