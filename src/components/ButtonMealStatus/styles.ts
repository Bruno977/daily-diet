import styled, { css } from "styled-components/native";

type ButtonProps = {
  variant: "primary" | "danger"; 
  isActive: boolean;
}

const COLOR_LIGHT = css<ButtonProps>`${props => props.variant === "danger" ? ` ${props.theme.COLORS.RED_LIGHT}` : `${props.theme.COLORS.GREEN_LIGHT}`}`
const COLOR_DARK = css<ButtonProps>`${props => props.variant === "danger" ? ` ${props.theme.COLORS.RED_DARK}` : `${props.theme.COLORS.GREEN_DARK}`}`

export const ButtonContainer = styled.Pressable<ButtonProps>`
  height: 50px;
  background-color: ${props => props.isActive ? COLOR_LIGHT : props.theme.COLORS.GRAY_6};
  border: 1px solid ${props => props.isActive ? COLOR_DARK : props.theme.COLORS.GRAY_6};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  flex: 1;
`
export const Circle = styled.View<ButtonProps>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: ${COLOR_DARK};
`
export const Label = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_1};
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-weight: 700;
`