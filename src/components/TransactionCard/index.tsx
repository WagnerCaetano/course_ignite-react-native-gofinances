import React from "react";

import { Amount, Category, CategoryName, Container, Footer, Icon, Title } from "./styles";
import theme from "../../global/styles/theme";

export function TransactionCard() {
  return (
    <Container theme={theme}>
      <Title theme={theme}>Desenvolvimento de site</Title>

      <Amount theme={theme}>R$ 12.000,00</Amount>

      <Footer>
        <Category theme={theme}>
          <Icon theme={theme} name="dollar-sign" />
          <CategoryName theme={theme}>Vendas</CategoryName>
        </Category>
      </Footer>
    </Container>
  );
}
