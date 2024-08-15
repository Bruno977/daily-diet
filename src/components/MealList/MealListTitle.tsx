import { formatDateTitle } from "../../utils/formatDate";
import * as S from "./styles";
export function MealListTitle({ title }: { title: string }) {
  return <S.TitleHeader>{formatDateTitle(new Date(title))}</S.TitleHeader>;
}
