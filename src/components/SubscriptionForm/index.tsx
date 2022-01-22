import { HiOutlineMail } from 'react-icons/hi';
import { RiUser3Line } from 'react-icons/ri';

import SecurityIcon from '../../assets/icons/security.svg';
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
        <Input icon={<RiUser3Line />} label="Nome completo" />

        <Input icon={<HiOutlineMail />} label="E-mail principal" />
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
        <SecurityIcon />

        <span>Suas informações estão seguras e livres de SPAM</span>
      </Footer>
    </>
  );
}
