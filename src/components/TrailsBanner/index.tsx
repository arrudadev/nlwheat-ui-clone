import {
  Container,
  LogoIcon,
  Section,
  Title,
  TrailsHeder,
  TrailsHederHeadline,
} from './styles';

export function TrailsBanner() {
  return (
    <Section>
      <Container>
        <TrailsHeder>
          <TrailsHederHeadline>
            <LogoIcon />

            <Title>
              Escolha a sua missão e <br /> conclua a sua inscrição
            </Title>
          </TrailsHederHeadline>
        </TrailsHeder>
      </Container>
    </Section>
  );
}
