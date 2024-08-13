import { theme } from './../../config/theme';
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { VariantProps } from "./types";

type ButtonProps ={
  hasIcon: boolean;
} & VariantProps;

const BACKGROUND_COLOR = {
  primary: theme.COLORS.GRAY_2,
  outline: "transparent",
}

export const COLOR = {
  primary: theme.COLORS.WHITE,
  outline: theme.COLORS.GRAY_1,
}

export const Button = styled(TouchableOpacity)<ButtonProps>`
  ${props => props.variant && css`
    background-color: ${BACKGROUND_COLOR[props.variant]};
    border: 1px solid ${BACKGROUND_COLOR[props.variant]};
  `}
  border: 1px solid ${props => props.theme.COLORS.GRAY_2};
  border-radius: 6px;
  min-height: 50px;
  max-height: 50px;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;

  ${props => props.hasIcon && css`
    flex-direction: row;
    gap: 10px;
  `}
`

export const Text = styled.Text<VariantProps>`
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
  font-family: ${props => props.theme.FONT_WEIGHT.REGULAR};
  font-weight: 700;
  ${props => props.variant && css`
    color: ${COLOR[props.variant]};
  `}
  
`