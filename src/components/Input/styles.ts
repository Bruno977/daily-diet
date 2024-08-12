import styled from "styled-components/native";

export const Container = styled.View`
  gap: 4px;
`

export const Label = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_2};
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-weight: 700;
  flex-shrink: 0;
`

export const Input = styled.TextInput`
  height: 48px;
  border: 1px solid ${props => props.theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;
`