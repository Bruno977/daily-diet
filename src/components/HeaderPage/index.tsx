import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as S from "./styles";
import { HeaderAction } from "../HeaderAction";
import { useTheme } from "styled-components/native";

type HeaderPage = {
  title: string;
  color?: string;
};

export function HeaderPage({ title, color }: HeaderPage) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const backgroundColor = color || theme.COLORS.GRAY_5;
  return (
    <S.ContainerHeader
      style={{
        paddingLeft: insets.left + 24,
        paddingRight: insets.right + 24,
        backgroundColor: backgroundColor,
      }}
    >
      <HeaderAction title={title} />
    </S.ContainerHeader>
  );
}
