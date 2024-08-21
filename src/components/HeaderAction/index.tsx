import { useTheme } from "styled-components/native";
import * as S from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

type HeaderActionProps = {
  colorIcon?: string;
  title?: string;
};
export const HEADER_ACTION_BUTTON_TEST_ID = "HeaderActionButton";
export const HEADER_ACTION_ICON_TEST_ID = "HeaderActionIcon";
export const HEADER_ACTION_TITLE_TEST_ID = "HeaderActionTitle";
export function HeaderAction({ colorIcon, title }: HeaderActionProps) {
  const theme = useTheme();
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <S.Container>
      <S.Button onPress={handleGoBack} testID={HEADER_ACTION_BUTTON_TEST_ID}>
        <ArrowLeft
          size={24}
          color={colorIcon ? colorIcon : theme.COLORS.GRAY_2}
        />
      </S.Button>
      {title && <S.Title testID={HEADER_ACTION_TITLE_TEST_ID}>{title}</S.Title>}
    </S.Container>
  );
}
