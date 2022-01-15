import {
  Container,
  Content,
  Description,
  DoWhileIcon,
  Headline,
  Logos,
  NlwIcon,
  Paragraph,
  Section,
  Title,
} from './styles';

export function AboutSection() {
  return (
    <Section>
      <Container>
        <Headline>
          <Logos>
            <NlwIcon /> <span>+</span> <DoWhileIcon />
          </Logos>

          <Title>
            Avance para o próximo <br /> nível e construa o futuro.
          </Title>

          <Paragraph>
            Nosso propósito é impulsionar a sua evolução para que você acesse as
            melhores oportunidades da sua carreira e, através delas, construa o
            futuro.
          </Paragraph>
        </Headline>

        <Content>
          <Description>
            Essa é uma longa jornada, composta por diversos níveis e momentos.
          </Description>

          <Description>
            Por isso, construímos o <strong>NLW</strong> , para você avançar
            para o próximo nível na prática e o <strong>DoWhile</strong> para
            você se conectar com a comunidade dev, empresas e profissionais para
            construir o futuro através da programação.
          </Description>

          <Description>
            O <strong>NLW</strong> é um evento intensivo com muito conteúo
            inédito, desenhado pela comunidade para te ajudar a dar o próximo
            passo na sua evolução na prática. E esse evento vai te ajudar a se
            preparar para o <strong>DoWhile2021</strong>.
          </Description>

          <Description>
            O <strong>DoWhile</strong> é um evento que reúne todo o ecossistema
            de programação para construir o futuro. Keynotes, palestras, talks,
            painéis e muitos workshops com profissionais do mercado estarão
            disponíveis nos dias 1 e 2 de dezembro.
          </Description>
        </Content>
      </Container>
    </Section>
  );
}
