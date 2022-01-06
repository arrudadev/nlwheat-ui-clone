import { ReactNode } from 'react';

import {
  Container,
  Content,
  Description,
  Header,
  IconContainer,
  Title,
} from './styles';

type MissionContentCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function MissionContentCard({
  icon,
  title,
  description,
}: MissionContentCardProps) {
  return (
    <Container>
      <Header>
        <IconContainer>{icon}</IconContainer>

        <Title>{title}</Title>
      </Header>

      <Content>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
}
