import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import {
  CheckboxContainer,
  CheckboxWrapper,
  Divider,
  Footer,
  Form,
  QuestionIcon,
  Title,
} from './styles';

export function SubscriptionForm() {
  return (
    <>
      <Title>Inscrição gratuita</Title>

      <Form>
        <Input icon="person.svg" label="Nome completo" />

        <Input icon="calendar.svg" label="E-mail principal" />
      </Form>

      <CheckboxWrapper>
        <CheckboxContainer>
          <Checkbox
            text={
              <>
                Quero participar <strong>gratuitamente</strong> do DoWhile2021
                também.
              </>
            }
            value="doWhile"
          />

          <Checkbox
            text={<>Concordo em receber comunicações.</>}
            value="marketing"
          />
        </CheckboxContainer>

        <QuestionIcon data-tip="Evento online e 100% gratuito que reúne toda a comunidade dev para um propósito: Construir o futuro através da programação. Keynotes, palestras, talks, painéis e diversos workshops com profissionais do mercado para você se conectar, evoluir e fazer parte dessa construção." />
      </CheckboxWrapper>

      <Button>Quero embarcar na missão</Button>

      <Divider />

      <Footer>
        <img src="/icons/home/security.svg" alt="Segurança" />

        <span>Suas informações estão seguras e livres de SPAM</span>
      </Footer>
    </>
  );
}
