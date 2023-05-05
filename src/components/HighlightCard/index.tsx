import React from "react";

import { Container, Header, Title, Icon, Footer, Amount, LastTransaction, TypeProps } from "./styles";
import theme from "../../global/styles/theme";

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

const mapIcons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HighlightCard({ title, amount, lastTransaction, type }: Props) {
  return (
    <Container type={type} theme={theme}>
      <Header>
        <Title type={type} theme={theme}>
          {title}
        </Title>
        <Icon theme={theme} name={mapIcons[type as unknown as keyof typeof mapIcons]} type={type} />
      </Header>

      <Footer>
        <Amount type={type} theme={theme}>
          {amount}
        </Amount>
        <LastTransaction type={type} theme={theme}>
          {lastTransaction}
        </LastTransaction>
      </Footer>
    </Container>
  );
}
