import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
`
export const Button = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
`
export const Title = styled.Text`
  flex: 1;
  text-align: center;
  color: ${props => props.theme.COLORS.GRAY_1};
  font-size: ${props => props.theme.FONT_SIZE.LG};
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
`