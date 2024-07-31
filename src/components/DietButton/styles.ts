import styled from "styled-components/native";
import { DietButtonProps } from ".";

export const Button = styled.Pressable<DietButtonProps>`
  background-color: ${props => props.variant === "primary" ? props.theme.COLORS.GREEN_LIGHT : props.theme.COLORS.RED_LIGHT};
  height: 102px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const Icon = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`