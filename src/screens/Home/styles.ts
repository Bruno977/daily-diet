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