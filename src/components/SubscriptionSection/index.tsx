import { Element } from 'react-scroll';

import { SubscriptionForm } from '../SubscriptionForm';
import {
  CalendarIcon,
  Container,
  Content,
  Detail,
  Details,
  DoWhileIcon,
  Logos,
  NlwIcon,
  OnlineIcon,
  Section,
  Subscription,
  SubTitle,
  Title,
} from './styles';

export function SubscriptionSection() {
  return (
    <Element name="subscription">
      <Section>
        <Container>
          <Content>
            <Logos>
              <NlwIcon /> <span>+</span> <DoWhileIcon />
            </Logos>

            <Title>
              Programação na <br /> prática, para quem <br /> busca evolução
            </Title>

            <SubTitle>
              Faça parte dessa missão e descubra ferramentas, conceitos e hacks
              que vão impulsionar sua carreira em programação.
            </SubTitle>

            <Details>
              <Detail>
                <CalendarIcon />

                <span>
                  18 a 24 <br /> de outubro
                </span>
              </Detail>

              <Detail>
                <OnlineIcon />

                <span>
                  Online <br /> e gratuito
                </span>
              </Detail>
            </Details>
          </Content>

          <Subscription>
            <SubscriptionForm />
          </Subscription>
        </Container>
      </Section>
    </Element>
  );
}
