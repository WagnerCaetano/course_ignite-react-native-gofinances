import React from "react";
import { Container, Header, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://avatars.githubusercontent.com/u/40742874" }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Rodrigo</UserName>
            </User>
          </UserInfo>
        </UserWrapper>

        <Icon name="power" />
      </Header>
    </Container>
  );
};

export default Dashboard;
