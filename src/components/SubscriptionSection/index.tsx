import { Element } from 'react-scroll';

import { SubscriptionEventDescription } from '../SubscriptionEventDescription';
import { SubscriptionForm } from '../SubscriptionForm';
import {
  Container,
  Content,
  DoWhileIcon,
  Logos,
  NlwIcon,
  Section,
  Subscription,
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

            <SubscriptionEventDescription
              title={
                <>
                  Programação na <br /> prática, para quem <br /> busca evolução
                </>
              }
              subtitle="Faça parte dessa missão e descubra ferramentas, conceitos e hacks
              que vão impulsionar sua carreira em programação."
            />
          </Content>

          <Subscription>
            <SubscriptionForm />
          </Subscription>
        </Container>
      </Section>
    </Element>
  );
}
