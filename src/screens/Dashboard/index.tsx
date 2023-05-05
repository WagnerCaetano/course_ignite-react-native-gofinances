import React from "react";
import { Container, Header, HighlightCards, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from "./styles";
import theme from "../../global/styles/theme";
import { HighlightCard } from "../../components/HighlightCard";

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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
};

export default Dashboard;
