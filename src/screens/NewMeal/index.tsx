import { Input } from "../../components/Input";
import * as S from "./styles";
import { ButtonMealStatus } from "../../components/ButtonMealStatus";
import { Button } from "../../components/Button";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { ButtonMealStatusProps, formDataProps, NewMealProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import { HeaderPage } from "../../components/HeaderPage";
import { DatePicker } from "../../components/DatePicker";
import { ModeProps } from "../../components/DatePicker/types";
import { InputDate } from "../../components/InputDate";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

import uuid from "react-native-uuid";

import { formatDate, formatTime } from "../../utils/formatDate";
import {
  createNewMealStorage,
  createStorage,
  DATA_MEAL_STORAGE_KEY,
  getMealStorage,
  getStorage,
  updateMealStorage,
} from "../../utils/asyncStorage";
import { isSameDay } from "date-fns";
import { DataStorageProps } from "../../@types/storage";
import { validateInput } from "../../utils/validateInput";

export function NewMeal({ route }: NewMealProps) {
  const routeParams = route?.params;
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

  function handleChangeDate(event: DateTimePickerEvent, date?: Date) {
    setShowDatePicker(!showDatePicker);
    const currentDate = date || new Date();
    setDate(currentDate);
    setFormData({
      ...formData,
      date: currentDate,
    });
  }

  async function handleSaveMeal() {
    try {
      const inputIsEmpty = validateInput(formData);

      if (inputIsEmpty) {
        return alert("Preencha todos os campos!");
      }

      const newMeal = {
        id: uuid.v4() as string,
        hour: String(formData.date),
        title: formData.title,
        inDiet: buttonStatus === "inDiet",
        description: formData.description,
      };

      await createNewMealStorage(newMeal);

      navigate("RegisteredMeal", { mealStatus: buttonStatus });
    } catch (err: any) {
      console.error("Error saving meal:", err.message);
    }
  }

  async function handleUpdateMeal() {
    try {
      await updateMealStorage({
        id: routeParams?.mealId as string,
        hour: String(formData.date),
        title: formData.title,
        inDiet: buttonStatus === "inDiet",
        description: formData.description,
      });
      navigate("Home");
    } catch (error) {
      console.error("Error updating meal:", error);
    }
  }

  async function getMeal() {
    if (!routeParams?.mealId) {
      return;
    }
    try {
      const response = await getMealStorage(routeParams.mealId);
      if (!response) {
        return;
      }
      setFormData({
        title: response.title,
        description: response.description,
        date: new Date(response.hour),
      });
      setButtonStatus(response.inDiet ? "inDiet" : "outDiet");
      setDate(new Date(response.hour));
    } catch (error) {
      console.error("Error getting meal:", error);
    }
  }

  useEffect(() => {
    getMeal();
  }, [routeParams]);

  return (
    <>
      <DatePicker
        visible={showDatePicker}
        mode={mode}
        date={date}
        onChange={handleChangeDate}
      />
      <HeaderPage
        title={routeParams?.mealId ? "Editar refeição" : "Nova Refeição"}
      />
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
            value={formData.description}
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
        {routeParams?.mealId ? (
          <Button title="Salvar alterações" onPress={handleUpdateMeal} />
        ) : (
          <Button title="Cadastrar Refeição" onPress={handleSaveMeal} />
        )}
      </S.Container>
    </>
  );
}
