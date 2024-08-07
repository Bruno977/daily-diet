import styled from "styled-components/native";

type StatusProps = {
  isFreeMeal: boolean
}

export const Container = styled.View`
  border: 1px solid ${props => props.theme.COLORS.GRAY_5};
  border-radius: 6px;
  height: 49px;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  margin-top: 10px;
`
export const Hour = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_1};
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-size: ${props => props.theme.FONT_SIZE.XS}px;
`
export const Divider = styled.View`
  height: 14px;
  width: 1px;
  margin: 0 12px;
  background-color: ${props => props.theme.COLORS.GRAY_4};
`
export const Title = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_2};
  font-family: ${props => props.theme.FONT_WEIGHT.REGULAR};
  font-size: ${props => props.theme.FONT_SIZE.MD}px;
`
export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${props => props.isFreeMeal? props.theme.COLORS.RED_MID : props.theme.COLORS.GREEN_MID};
  margin-left: auto;
`
export const TitleHeader = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_1};
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-size: ${props => props.theme.FONT_SIZE.LG}px;
  margin-top: 30px;
`
export const ContainerTitleMealListEmpty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const TitleMealListEmpty = styled.Text`
  color: ${props => props.theme.COLORS.GRAY_1};
  font-family: ${props => props.theme.FONT_WEIGHT.BOLD};
  font-size: ${props => props.theme.FONT_SIZE.MD}px;
`