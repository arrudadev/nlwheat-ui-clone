import PlayVideoIcon from '../../assets/icons/play-video.svg';
import {
  Button,
  Buttons,
  ButtonWrapper,
  Container,
  Content,
  Header,
  Paragraph,
  PlayVideoButton,
  Section,
  Thumbnail,
  ThumbnailWrapper,
  Title,
  VideoWrapper,
} from './styles';

export function EditionsSection() {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Missões cumpridas com sucesso</Title>

          <Paragraph>
            A cada edição o NLW avança para o próximo nível, junto com todos os
            participantes. Dessa vez não será diferente. <br /> Essa será a
            melhor edição já realizada.
          </Paragraph>
        </Header>

        <Content>
          <Buttons>
            <ButtonWrapper className="active">
              <Button>
                <span>Edição</span>

                <strong>#01</strong>
              </Button>
            </ButtonWrapper>

            <ButtonWrapper>
              <Button>
                <span>Edição</span>

                <strong>#02</strong>
              </Button>
            </ButtonWrapper>

            <ButtonWrapper>
              <Button>
                <span>Edição</span>

                <strong>#03</strong>
              </Button>
            </ButtonWrapper>

            <ButtonWrapper>
              <Button>
                <span>Edição</span>

                <strong>#04</strong>
              </Button>
            </ButtonWrapper>

            <ButtonWrapper>
              <Button>
                <span>Edição</span>

                <strong>#05</strong>
              </Button>
            </ButtonWrapper>

            <ButtonWrapper>
              <Button>
                <span>Edição</span>

                <strong>#06</strong>
              </Button>
            </ButtonWrapper>
          </Buttons>

          <VideoWrapper>
            <PlayVideoButton>
              <PlayVideoIcon />

              <ThumbnailWrapper>
                <Thumbnail
                  alt="Next Level Week 1"
                  src="/images/thumbnails/nlw1.png"
                />
              </ThumbnailWrapper>
            </PlayVideoButton>
          </VideoWrapper>
        </Content>
      </Container>
    </Section>
  );
}
