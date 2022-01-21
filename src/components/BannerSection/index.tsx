import { Divider } from '../Divider';
import { SubscriptionForm } from '../SubscriptionForm';
import {
  BinaryIcon01Icon,
  BinaryIcon02Icon,
  BinaryIcon03Icon,
  CalendarIcon,
  Container,
  Content,
  Detail,
  Details,
  DetailText,
  Edition,
  Logo,
  OnlineIcon,
  Section,
  Subscription,
  SubTitle,
  Title,
} from './styles';

export function BannerSection() {
  return (
    <Section>
      <Container>
        <Content>
          <Logo />

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
              <CalendarIcon />

              <DetailText>
                18 a 24 <br />
                de outubro
              </DetailText>
            </Detail>

            <Detail>
              <OnlineIcon />

              <DetailText>
                Online <br /> e gratuito
              </DetailText>
            </Detail>
          </Details>
        </Content>

        <Subscription>
          <SubscriptionForm />

          <BinaryIcon01Icon />

          <BinaryIcon02Icon />

          <BinaryIcon03Icon />
        </Subscription>
      </Container>

      <Divider />
    </Section>
  );
}
