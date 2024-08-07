import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`
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
  `