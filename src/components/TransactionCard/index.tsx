import React from "react";
import { Amount, Category, CategoryName, ContainerCard, Footer, Icon, Title, Date } from "./styles";
import theme from "../../global/styles/theme";

interface CategoryProps {
  key: string;
  name: string;
  icon: string;
}

interface TransactionCardProps {
  data: {
    title: string;
    amount: string;
    category: CategoryProps;
    date: string;
  };
}

export function TransactionCard({ data }: TransactionCardProps) {
  return (
    <ContainerCard theme={theme}>
      <Title theme={theme}>{data.title}</Title>

      <Amount theme={theme}>{data.amount}</Amount>
      <Footer>
        <Category theme={theme}>
          <Icon theme={theme} name={data.category.icon} />
          <CategoryName theme={theme}>{data.category.name}</CategoryName>
        </Category>
        <Date theme={theme}>{data.date}</Date>
      </Footer>
    </ContainerCard>
  );
}
