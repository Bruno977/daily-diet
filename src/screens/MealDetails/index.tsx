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
import { useState } from "react";
export function MealDetails() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [modalDeleteIsVisible, setModalDeleteIsVisible] = useState(false);

  function handleDeleteMeal() {
    console.log("Delete Meal");
  }
  return (
    <>
      <Modal
        visible={modalDeleteIsVisible}
        onConfirm={handleDeleteMeal}
        onClose={() => setModalDeleteIsVisible(!modalDeleteIsVisible)}
      />
      <HeaderPage title="Refeição" color={theme.COLORS.GREEN_LIGHT} />
      <Container style={{ gap: 15 }}>
        <View style={{ gap: 8 }}>
          <S.Title>Refeição 1</S.Title>
          <S.Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </S.Description>
        </View>
        <View style={{ gap: 8 }}>
          <S.TitleDateAndTime>Data e hora</S.TitleDateAndTime>
          <S.Description>12/08/2022 às 16:00</S.Description>
        </View>
        <Tag status="inDiet" />
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
