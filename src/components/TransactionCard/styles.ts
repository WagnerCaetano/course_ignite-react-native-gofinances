import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  padding: 17px 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CategoryName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)} px;

  margin-left: 17px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)} px;
`;
