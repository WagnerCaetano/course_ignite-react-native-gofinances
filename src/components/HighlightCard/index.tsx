import React from "react";

import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from "./styles";
import theme from "../../global/styles/theme";

export function HighlightCard() {
  return (
    <Container theme={theme}>
      <Header>
        <Title theme={theme}>Entrada</Title>
        <Icon theme={theme} name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount theme={theme}>R$ 17.400,00</Amount>
        <LastTransaction theme={theme}>Última entrada a 15 dias atrás</LastTransaction>
      </Footer>
    </Container>
  );
}
