import { useTheme } from "styled-components/native";
import { HeaderPage } from "../../components/HeaderPage";
import * as S from "./styles";
import { Container } from "../NewMeal/styles";
import { View } from "react-native";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { Modal } from "../../components/Modal";
import { useEffect, useMemo, useState } from "react";
import { MealDetailsProps, MealProps } from "./types";
import { getMealStorage } from "../../utils/asyncStorage";
import { DataStorageItemProps } from "../../@types/storage";
import { format } from "date-fns";

export function MealDetails({ route }: MealDetailsProps) {
  const { mealId } = route.params;
  const [meal, setMeal] = useState<DataStorageItemProps | null>(null);

  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [modalDeleteIsVisible, setModalDeleteIsVisible] = useState(false);

  function handleDeleteMeal() {
    console.log("Delete Meal");
  }

  const headerColor = useMemo(() => {
    return meal?.inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT;
  }, [mealId, meal?.inDiet]);

  function formatDate() {
    if (!meal?.hour) {
      return;
    }
    return format(new Date(meal?.hour), "dd/MM/yyyy 'às' HH:mm");
  }

  async function getMeal() {
    const mealData = await getMealStorage(mealId);
    setMeal(mealData);
  }

  useEffect(() => {
    getMeal();
  }, [mealId]);
  return (
    <>
      <Modal
        visible={modalDeleteIsVisible}
        onConfirm={handleDeleteMeal}
        onClose={() => setModalDeleteIsVisible(!modalDeleteIsVisible)}
      />
      <HeaderPage title="Refeição" color={headerColor} />
      <Container style={{ gap: 15 }}>
        <View style={{ gap: 8 }}>
          <S.Title>{meal?.title}</S.Title>
          <S.Description>{meal?.description}</S.Description>
        </View>
        <View style={{ gap: 8 }}>
          <S.TitleDateAndTime>Data e hora</S.TitleDateAndTime>
          <S.Description>{formatDate()}</S.Description>
        </View>
        <Tag status={meal?.inDiet ? "inDiet" : "outDiet"} />
      </Container>
      <View
        style={{
          paddingBottom: insets.bottom + 24,
          paddingLeft: insets.left + 24,
          paddingRight: insets.right + 24,
          gap: 8,
        }}
      >
        <Button title="Editar Refeição" icon={<PencilSimpleLine />} />
        <Button
          title="Excluir Refeição"
          variant="outline"
          icon={<Trash />}
          onPress={() => setModalDeleteIsVisible(!modalDeleteIsVisible)}
        />
      </View>
    </>
  );
}
