import { Input } from "../../components/Input";
import * as S from "./styles";
import { ButtonMealStatus } from "../../components/ButtonMealStatus";
import { Button } from "../../components/Button";
import { View } from "react-native";
import { useState } from "react";
import { ButtonMealStatusProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import { HeaderPage } from "../../components/HeaderPage";
import { DatePicker } from "../../components/DatePicker";
import { ModeProps } from "../../components/DatePicker/types";
import { InputDate } from "../../components/InputDate";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

import { formatDate, formatTime } from "../../utils/formatDate";

export function NewMeal() {
  const { navigate } = useNavigation();
  const [buttonStatus, setButtonStatus] =
    useState<ButtonMealStatusProps>("inDiet");

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [mode, setMode] = useState<ModeProps>("date");

  function handlePressButtonMealStatus(status: ButtonMealStatusProps) {
    setButtonStatus(status);
  }

  function handleCreateMeal() {
    navigate("RegisteredMeal", { mealStatus: buttonStatus });
  }

  function handleBlurDateType(mode: ModeProps) {
    setMode(mode);
    setShowDatePicker(!showDatePicker);
  }

  function handleChangeDate(event: DateTimePickerEvent, date?: Date) {
    setShowDatePicker(!showDatePicker);
    setDate(date || new Date());
  }

  return (
    <>
      <DatePicker
        visible={showDatePicker}
        mode={mode}
        date={date}
        onChange={handleChangeDate}
      />
      <HeaderPage title="Nova Refeição" />
      <S.Container>
        <S.GridContainer>
          <Input label="Nome" />
          <Input label="Descrição" isTextArea />
          <S.GridRow>
            <InputDate
              label="Data"
              value={formatDate(date)}
              onPress={() => handleBlurDateType("date")}
            />
            <InputDate
              label="Hora"
              value={formatTime(date)}
              onPress={() => handleBlurDateType("time")}
            />
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
        <Button title="Cadastrar Refeição" onPress={handleCreateMeal} />
      </S.Container>
    </>
  );
}
