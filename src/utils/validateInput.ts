import { formDataProps } from "../screens/NewMeal/types";

function validateInput(formData: formDataProps) {
  const titleIsEmpty = formData.title === "";
  const descriptionIsEmpty = formData.description === "";
  if (titleIsEmpty || descriptionIsEmpty) {
    return true;
  }
}
export { validateInput };
