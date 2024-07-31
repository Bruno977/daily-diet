import * as S from "./styles";
import { cloneElement } from "react";
import { ButtonProps } from "./types";

export function Button({
  icon,
  title,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <S.Button variant={variant} hasIcon={icon ? true : false} {...rest}>
      {icon && cloneElement(icon, { size: 18, color: S.COLOR[variant] })}
      <S.Text variant={variant}>{title}</S.Text>
    </S.Button>
  );
}
