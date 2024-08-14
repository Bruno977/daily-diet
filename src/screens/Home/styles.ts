import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const MealTitle = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_1};
  font-size: ${props => props.theme.FONT_SIZE.MD}px;
  margin-bottom: 10px;
`

export const GradientOverlay = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  pointer-events: none;
  `