import { useTheme } from "styled-components/native";
import * as S from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

type HeaderActionProps = {
  colorIcon?: string;
  title?: string;
};

export function HeaderAction({ colorIcon, title }: HeaderActionProps) {
  const theme = useTheme();
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <S.Container>
      <S.Button onPress={handleGoBack}>
        <ArrowLeft
          size={24}
          color={colorIcon ? colorIcon : theme.COLORS.GRAY_2}
        />
      </S.Button>
      {title && <S.Title>{title}</S.Title>}
    </S.Container>
  );
}
