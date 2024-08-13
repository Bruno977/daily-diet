import { Button } from "../../components/Button";
import * as S from "./styles";
import { ButtonMealStatusProps } from "../NewMeal/types";
import { useNavigation } from "@react-navigation/native";

import KeepItUp from "../../assets/keep-it-up.png";
import WhatAShame from "../../assets/what-a-shame.png";
import { Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/types";

type Props = NativeStackScreenProps<RootStackParamList, "RegisteredMeal">;

type MealStatusProps = {
  mealStatus: ButtonMealStatusProps;
};

export function RegisteredMeal({ route }: Props) {
  const { mealStatus } = route.params as MealStatusProps;
  const { navigate } = useNavigation();

  const contentScreen = {
    inDiet: {
      title: "Continue assim!",
      description: (
        <>
          Você continua{" "}
          <S.DescriptionStrong>dentro da dieta</S.DescriptionStrong>. Muito bem!
        </>
      ),
      image: KeepItUp,
    },
    outDiet: {
      title: "Que pena!",
      description: (
        <>
          Você <S.DescriptionStrong>saiu da dieta</S.DescriptionStrong> dessa
          vez, mas continue {"\n"} se esforçando e não desista!
        </>
      ),
      image: WhatAShame,
    },
  };
  return (
    <S.Container>
      <S.Title inDiet={mealStatus === "inDiet"}>
        {contentScreen[mealStatus].title}
      </S.Title>
      <S.Description>{contentScreen[mealStatus].description}</S.Description>
      <S.containerImage>
        <Image source={contentScreen[mealStatus].image} />
      </S.containerImage>
      <Button
        title="Ir para a página Inicial"
        onPress={() => navigate("Home")}
      />
    </S.Container>
  );
}
