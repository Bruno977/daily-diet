import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: rgba(0 , 0, 0, 0.25);
`
export const Content = styled.View`
  background: ${props => props.theme.COLORS.GRAY_7};
  border-radius: 8px;
  height: 192px;
  margin: 0px 24px;
  align-items: center;
  justify-content: center;
  gap: 32px;
`

export const ContainerButtons = styled.View`
  flex-direction: row;
  gap: 12px;
  padding: 0px 24px;
`
export const Title = styled.Text`
  text-align: center;
  color: ${props => props.theme.COLORS.GRAY_2};
  font-size: ${props => props.theme.FONT_SIZE.LG}px;
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-weight: 700;
`