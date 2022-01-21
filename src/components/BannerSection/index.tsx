import { Divider } from '../Divider';
import { SubscriptionEventDescription } from '../SubscriptionEventDescription';
import { SubscriptionForm } from '../SubscriptionForm';
import {
  BinaryIcon01Icon,
  BinaryIcon02Icon,
  BinaryIcon03Icon,
  Container,
  Content,
  Edition,
  Logo,
  Section,
  Subscription,
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

          <SubscriptionEventDescription
            title="Sua carreira em programação no próximo nível e em menos tempo"
            subtitle=" Evento online, gratuito e prático para você levar suas habilidades
            em programação para o próximo nível."
          />
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
