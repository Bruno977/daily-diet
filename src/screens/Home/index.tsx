import { Plus } from "phosphor-react-native";
import { Button } from "../../components/Button";
import { DietButton } from "../../components/DietButton";
import { Header } from "../../components/Header";
import * as S from "./styles";
import { SectionList } from "react-native";
import { MealListItem } from "../../components/MealList/MealListItem";
import { MealItem } from "../../components/MealList/types";
import { MealListTitle } from "../../components/MealList/MealListTitle";
import { MealListEmpty } from "../../components/MealList/MealListEmpty";

type DataProps = {
  title: string;
  data: MealItem[];
};

const DATA: DataProps[] = [
  {
    title: "12.08.22",
    data: [
      { id: "1", hour: "20:00", title: "X-Tudo", isFreeMeal: true },
      { id: "2", hour: "20:00", title: "X-Tudo", isFreeMeal: false },
      { id: "3", hour: "20:00", title: "X-Tudo", isFreeMeal: true },
    ],
  },
  {
    title: "13.08.22",
    data: [
      { id: "4", hour: "20:00", title: "X-Tudo", isFreeMeal: true },
      { id: "5", hour: "20:00", title: "X-Tudo", isFreeMeal: false },
      { id: "6", hour: "20:00", title: "X-Tudo", isFreeMeal: true },
    ],
  },
  {
    title: "14.08.22",
    data: [
      { id: "7", hour: "20:00", title: "X-Tudo", isFreeMeal: true },
      { id: "8", hour: "20:00", title: "X-Tudo", isFreeMeal: false },
      { id: "9", hour: "20:00", title: "X-Tudo", isFreeMeal: true },
    ],
  },
];

export function Home() {
  return (
    <>
      <S.Container>
        <SectionList
          sections={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MealListItem data={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <MealListTitle title={title} />
          )}
          contentContainerStyle={[{ paddingBottom: 100, flexGrow: 1 }]}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <Header />
              <DietButton />
              <S.MealTitle>Refeições</S.MealTitle>
              <Button title="Nova Refeição" icon={<Plus />} />
            </>
          }
          ListEmptyComponent={<MealListEmpty />}
        />
      </S.Container>
      <S.GradientOverlay
        colors={["rgba(250, 250, 250, 0)", "rgba(250, 250, 250, 1)"]}
      />
    </>
  );
}
