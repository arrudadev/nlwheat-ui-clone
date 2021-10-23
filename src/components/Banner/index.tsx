import { SubscriptionForm } from '../SubscriptionForm';
import {
  Container,
  Content,
  Detail,
  DetailIcon,
  Details,
  DetailText,
  Edition,
  Logo,
  Section,
  Subscription,
  SubTitle,
  Title,
} from './styles';

export function Banner() {
  return (
    <Section>
      <Container>
        <Content>
          <Logo src="/logo.svg" />

          <Edition>
            Edição especial <span>|</span> Conteúdo inédito
          </Edition>

          <Title>
            Sua carreira em programação no próximo nível e em menos tempo
          </Title>

          <SubTitle>
            Evento online, gratuito e prático para você levar suas habilidades
            em programação para o próximo nível.
          </SubTitle>

          <Details>
            <Detail>
              <DetailIcon src="/icons/home/calendar.svg" />

              <DetailText>
                18 a 24 <br />
                de outubro
              </DetailText>
            </Detail>

            <Detail>
              <DetailIcon src="/icons/home/computer.svg" />

              <DetailText>
                Online <br /> e gratuito
              </DetailText>
            </Detail>
          </Details>
        </Content>

        <Subscription>
          <SubscriptionForm />
        </Subscription>
      </Container>
    </Section>
  );
}
