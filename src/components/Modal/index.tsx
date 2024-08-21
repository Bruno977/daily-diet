import { Button } from "../Button";
import * as S from "./styles";
import { ModalProps, Modal as ModalRN } from "react-native";
type Props = ModalProps & {
  onClose: () => void;
  onConfirm: () => void;
};
export const MODAL_CANCEL_TEST_ID = "ModalCancel";
export const MODAL_CONFIRM_TEST_ID = "ModalConfirm";

export function Modal({ onClose, onConfirm, ...rest }: Props) {
  return (
    <ModalRN {...rest} transparent statusBarTranslucent animationType="fade">
      <S.Container>
        <S.Content>
          <S.Title>
            Deseja realmente excluir o{"\n"} registro da refeição?
          </S.Title>
          <S.ContainerButtons>
            <Button
              title="Cancelar"
              variant="outline"
              style={{ flex: 1 }}
              onPress={onClose}
              testID={MODAL_CANCEL_TEST_ID}
            />
            <Button
              title="Sim, excluir"
              style={{ flex: 1 }}
              onPress={onConfirm}
              testID={MODAL_CONFIRM_TEST_ID}
            />
          </S.ContainerButtons>
        </S.Content>
      </S.Container>
    </ModalRN>
  );
}
