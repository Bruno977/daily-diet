import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as S from "./styles";
import { HeaderAction } from "../HeaderAction";

export function HeaderPage() {
  const insets = useSafeAreaInsets();
  return (
    <S.ContainerHeader
      style={{
        paddingLeft: insets.left + 24,
        paddingRight: insets.right + 24,
      }}
    >
      <HeaderAction title="Nova Refeição" />
    </S.ContainerHeader>
  );
}
