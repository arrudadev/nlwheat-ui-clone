import ComputerIcon from '../../assets/icons/computer.svg';
import FocusIcon from '../../assets/icons/focus.svg';
import GroupIcon from '../../assets/icons/group.svg';
import { MethodCard } from '../MethodCard';
import { Pillars } from '../Pillars';
import { Cards, Container, Section, Title } from './styles';

export function MethodSection() {
  return (
    <Section>
      <Container>
        <Title>Método desenhado para acelerar a sua evolução</Title>

        <Cards>
          <MethodCard
            icon={<ComputerIcon />}
            title="Prática"
            description="O conteúdo do NLW é totalmente prático. Juntos, vamos desenvolver uma aplicação completa do início ao fim, pra você aprender de forma eficiente e expandir o seu portfólio. Essas horas de código vão te dar confiança e propriedade para tomar as melhores decisões."
          />

          <MethodCard
            icon={<FocusIcon />}
            title="Prática"
            description="O conteúdo do NLW é totalmente prático. Juntos, vamos desenvolver uma aplicação completa do início ao fim, pra você aprender de forma eficiente e expandir o seu portfólio. Essas horas de código vão te dar confiança e propriedade para tomar as melhores decisões."
          />

          <MethodCard
            icon={<GroupIcon />}
            title="Prática"
            description="O conteúdo do NLW é totalmente prático. Juntos, vamos desenvolver uma aplicação completa do início ao fim, pra você aprender de forma eficiente e expandir o seu portfólio. Essas horas de código vão te dar confiança e propriedade para tomar as melhores decisões."
          />
        </Cards>

        <Pillars />
      </Container>
    </Section>
  );
}
