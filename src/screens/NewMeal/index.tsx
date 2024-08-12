import { HeaderAction } from "../../components/HeaderAction";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { ButtonMealStatus } from "../../components/ButtonMealStatus";
import { Button } from "../../components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { useState } from "react";
import { ButtonMealStatusProps } from "./types";

export function NewMeal() {
  const insets = useSafeAreaInsets();
  const [buttonStatus, setButtonStatus] =
    useState<ButtonMealStatusProps>("inDiet");

  function handlePressButtonMealStatus(status: ButtonMealStatusProps) {
    setButtonStatus(status);
  }
  return (
    <>
      <S.ContainerHeader
        style={{
          paddingLeft: insets.left + 24,
          paddingRight: insets.right + 24,
        }}
      >
        <HeaderAction title="Nova Refeição" />
      </S.ContainerHeader>
      <S.Container>
        <S.GridContainer>
          <Input label="Nome" />
          <Input label="Descrição" />
          <S.GridRow>
            <Input label="Data" fullWidth />
            <Input label="Hora" fullWidth />
          </S.GridRow>
          <View style={{ flex: 1, gap: 8 }}>
            <S.Subtitle>Está dentro da Dieta?</S.Subtitle>
            <S.GridRow style={{ gap: 8 }}>
              <ButtonMealStatus
                title="Sim"
                variant="primary"
                isActive={buttonStatus === "inDiet"}
                onPress={() => handlePressButtonMealStatus("inDiet")}
              />
              <ButtonMealStatus
                title="Não"
                variant="danger"
                isActive={buttonStatus === "outDiet"}
                onPress={() => handlePressButtonMealStatus("outDiet")}
              />
            </S.GridRow>
          </View>
        </S.GridContainer>
        <Button title="Cadastrar Refeição" />
      </S.Container>
    </>
  );
}
