import { Divider } from '../Divider';
import { EducatorsList } from '../EducatorsList';
import { Container, Header, Paragraph, Section, Title } from './styles';

export function EducatorsSection() {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Educadores experientes para te ajudar a evoluir</Title>

          <Paragraph>
            Um evento intenso, onde você será conduzido por um time de
            educadores altamente capacitado e preparado para te atender e tirar
            suas dúvidas. Contar com quem já conhece o caminho para te guiar é a
            melhor forma de ganhar tempo.
          </Paragraph>
        </Header>

        <EducatorsList />
      </Container>

      <Divider />
    </Section>
  );
}
