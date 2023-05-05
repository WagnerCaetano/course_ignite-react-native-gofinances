import React from "react";
import {
  Container,
  Header,
  HighlightCards,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Transactions,
  Title,
} from "./styles";
import theme from "../../global/styles/theme";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

const Dashboard = () => {
  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <UserWrapper>
          <UserInfo>
            <Photo theme={theme} source={{ uri: "https://avatars.githubusercontent.com/u/40742874" }} />
            <User>
              <UserGreeting theme={theme}>Olá, </UserGreeting>
              <UserName theme={theme}>Wagner</UserName>
            </User>
          </UserInfo>
          <Icon name="power" theme={theme} />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17,400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1,259,00"
          lastTransaction="Última entrada dia 03 de abril"
        />
        <HighlightCard type="total" title="Total" amount="R$ 16,141,00" lastTransaction="01 à 16 de abril" />
      </HighlightCards>

      <Transactions>
        <Title theme={theme}>Listagem</Title>

        <TransactionCard />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
