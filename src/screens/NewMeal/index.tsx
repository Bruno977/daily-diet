import { Input } from "../../components/Input";
import * as S from "./styles";
import { ButtonMealStatus } from "../../components/ButtonMealStatus";
import { Button } from "../../components/Button";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { ButtonMealStatusProps, formDataProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import { HeaderPage } from "../../components/HeaderPage";
import { DatePicker } from "../../components/DatePicker";
import { ModeProps } from "../../components/DatePicker/types";
import { InputDate } from "../../components/InputDate";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

import uuid from "react-native-uuid";

import { formatDate, formatTime } from "../../utils/formatDate";
import {
  createStorage,
  DATA_MEAL_STORAGE_KEY,
  getStorage,
} from "../../utils/asyncStorage";
import { isSameDay } from "date-fns";
import { DataStorageProps } from "../../@types/storage";

export function NewMeal() {
  const { navigate } = useNavigation();
  const startDate = new Date();

  const [formData, setFormData] = useState<formDataProps>({
    title: "",
    description: "",
    date: startDate,
  });

  const [buttonStatus, setButtonStatus] =
    useState<ButtonMealStatusProps>("inDiet");

  const [date, setDate] = useState(startDate);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [mode, setMode] = useState<ModeProps>("date");

  function handleBlurDateType(mode: ModeProps) {
    setMode(mode);
    setShowDatePicker(!showDatePicker);
  }

  function validateInput() {
    const titleIsEmpty = formData.title === "";
    const descriptionIsEmpty = formData.description === "";
    if (titleIsEmpty || descriptionIsEmpty) {
      return true;
    }
  }

  function handleChangeDate(event: DateTimePickerEvent, date?: Date) {
    setShowDatePicker(!showDatePicker);
    const currentDate = date || new Date();
    setDate(currentDate);
    setFormData({
      ...formData,
      date: currentDate,
    });
  }

  async function formatBodyStorage() {
    const response = (await getStorage(
      DATA_MEAL_STORAGE_KEY
    )) as DataStorageProps[];

    const newMeal = {
      id: uuid.v4() as string,
      hour: String(formData.date),
      title: formData.title,
      inDiet: buttonStatus === "inDiet",
      description: formData.description,
    };
    if (response && response.length > 0) {
      const updatedStorage = response.map((item) => {
        const isSameDate = isSameDay(new Date(item.title), formData.date);
        if (isSameDate) {
          return { ...item, data: [...item.data, newMeal] };
        }
        return item;
      });
      const isSameDate = response.some((item) =>
        isSameDay(new Date(item.title), formData.date)
      );

      if (!isSameDate) {
        updatedStorage.push({
          title: String(formData.date),
          data: [newMeal],
        });
      }
      return updatedStorage;
    }
    return [
      {
        title: String(formData.date),
        data: [newMeal],
      },
    ];
  }

  async function handleSaveMeal() {
    try {
      const inputIsEmpty = validateInput();

      if (inputIsEmpty) {
        return alert("Preencha todos os campos!");
      }

      const storageData = await formatBodyStorage();

      await createStorage(DATA_MEAL_STORAGE_KEY, JSON.stringify(storageData));
      navigate("RegisteredMeal", { mealStatus: buttonStatus });
    } catch (err: any) {
      console.error("Error saving meal:", err.message);
    }
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
          <Input
            label="Nome"
            value={formData.title}
            onChangeText={(value) => setFormData({ ...formData, title: value })}
          />
          <Input
            label="Descrição"
            isTextArea
            onChangeText={(value) =>
              setFormData({ ...formData, description: value })
            }
          />
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
                onPress={() => setButtonStatus("inDiet")}
              />
              <ButtonMealStatus
                title="Não"
                variant="danger"
                isActive={buttonStatus === "outDiet"}
                onPress={() => setButtonStatus("outDiet")}
              />
            </S.GridRow>
          </View>
        </S.GridContainer>
        <Button title="Cadastrar Refeição" onPress={handleSaveMeal} />
      </S.Container>
    </>
  );
}
