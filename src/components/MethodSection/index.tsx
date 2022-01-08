import CheckIcon from '../../assets/icons/check.svg';
import ComputerIcon from '../../assets/icons/computer.svg';
import { MethodCard } from '../MethodCard';
import {
  Cards,
  Combinations,
  CombinationsList,
  CombinationsListItem,
  CombinationsTitle,
  Container,
  Section,
  Title,
} from './styles';

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
            icon={<ComputerIcon />}
            title="Prática"
            description="O conteúdo do NLW é totalmente prático. Juntos, vamos desenvolver uma aplicação completa do início ao fim, pra você aprender de forma eficiente e expandir o seu portfólio. Essas horas de código vão te dar confiança e propriedade para tomar as melhores decisões."
          />

          <MethodCard
            icon={<ComputerIcon />}
            title="Prática"
            description="O conteúdo do NLW é totalmente prático. Juntos, vamos desenvolver uma aplicação completa do início ao fim, pra você aprender de forma eficiente e expandir o seu portfólio. Essas horas de código vão te dar confiança e propriedade para tomar as melhores decisões."
          />
        </Cards>

        <Combinations>
          <CombinationsTitle>
            Os 3 pilares combinados te darão:
          </CombinationsTitle>

          <CombinationsList>
            <CombinationsListItem>
              <CheckIcon />

              <span>Experiência e portfolio</span>
            </CombinationsListItem>
          </CombinationsList>
        </Combinations>
      </Container>
    </Section>
  );
}
