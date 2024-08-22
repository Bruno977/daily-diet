import { formDataProps } from "../../src/screens/NewMeal/types";

export const mockFormDataEmpty: formDataProps = {
  title: "",
  description: "",
  date: new Date(),
};

export const mockFormData: formDataProps = {
  title: "Título do alimento",
  description: "Descrição do alimento",
  date: new Date(),
};
