import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import {
  CheckboxContainer,
  CheckboxWrapper,
  Divider,
  Footer,
  Form,
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
