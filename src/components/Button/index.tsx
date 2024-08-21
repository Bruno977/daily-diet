import * as S from "./styles";
import { cloneElement } from "react";
import { ButtonProps } from "./types";

export const BUTTON_ICON_TEST_ID = "buttonIcon";

export function Button({
  icon,
  title,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <S.Button variant={variant} hasIcon={icon ? true : false} {...rest}>
      {icon &&
        cloneElement(icon, {
          size: 18,
          color: S.COLOR[variant],
          testID: BUTTON_ICON_TEST_ID,
        })}
      <S.Text variant={variant}>{title}</S.Text>
    </S.Button>
  );
}
