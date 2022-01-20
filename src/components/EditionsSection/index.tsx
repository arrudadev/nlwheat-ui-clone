import { useState } from 'react';

import PlayVideoIcon from '../../assets/icons/play-video.svg';
import { Divider } from '../Divider';
import {
  Button,
  ButtonMobile,
  Buttons,
  ButtonsMobile,
  ButtonWrapper,
  ButtonWrapperMobile,
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
  const [selectedEdition, setSelectedEdition] = useState('6');

  function isActive(edition: string) {
    return selectedEdition === edition;
  }

  function handleSelectEdition(edition: string) {
    setSelectedEdition(edition);
  }

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
            <ButtonWrapper className={isActive('1') ? 'active' : ''}>
              <Button onClick={() => handleSelectEdition('1')}>
                <span>Edição</span>

                <strong>#01</strong>
              </Button>
            </ButtonWrapper>

            <ButtonWrapper className={isActive('2') ? 'active' : ''}>
              <Button onClick={() => handleSelectEdition('2')}>
                <span>Edição</span>

                <strong>#02</strong>
              </Button>
            </ButtonWrapper>

            <ButtonWrapper className={isActive('3') ? 'active' : ''}>
              <Button onClick={() => handleSelectEdition('3')}>
                <span>Edição</span>

                <strong>#03</strong>
              </Button>
            </ButtonWrapper>

            <ButtonWrapper className={isActive('4') ? 'active' : ''}>
              <Button onClick={() => handleSelectEdition('4')}>
                <span>Edição</span>

                <strong>#04</strong>
              </Button>
            </ButtonWrapper>

            <ButtonWrapper className={isActive('5') ? 'active' : ''}>
              <Button onClick={() => handleSelectEdition('5')}>
                <span>Edição</span>

                <strong>#05</strong>
              </Button>
            </ButtonWrapper>

            <ButtonWrapper className={isActive('6') ? 'active' : ''}>
              <Button onClick={() => handleSelectEdition('6')}>
                <span>Edição</span>

                <strong>#06</strong>
              </Button>
            </ButtonWrapper>
          </Buttons>

          <ButtonsMobile>
            <ButtonWrapperMobile className={isActive('1') ? 'active' : ''}>
              <ButtonMobile onClick={() => handleSelectEdition('1')}>
                <strong>#01</strong>
              </ButtonMobile>
            </ButtonWrapperMobile>

            <ButtonWrapperMobile className={isActive('2') ? 'active' : ''}>
              <ButtonMobile onClick={() => handleSelectEdition('2')}>
                <strong>#02</strong>
              </ButtonMobile>
            </ButtonWrapperMobile>

            <ButtonWrapperMobile className={isActive('3') ? 'active' : ''}>
              <ButtonMobile onClick={() => handleSelectEdition('3')}>
                <strong>#03</strong>
              </ButtonMobile>
            </ButtonWrapperMobile>

            <ButtonWrapperMobile className={isActive('4') ? 'active' : ''}>
              <ButtonMobile onClick={() => handleSelectEdition('4')}>
                <strong>#04</strong>
              </ButtonMobile>
            </ButtonWrapperMobile>

            <ButtonWrapperMobile className={isActive('5') ? 'active' : ''}>
              <ButtonMobile onClick={() => handleSelectEdition('5')}>
                <strong>#05</strong>
              </ButtonMobile>
            </ButtonWrapperMobile>

            <ButtonWrapperMobile className={isActive('6') ? 'active' : ''}>
              <ButtonMobile onClick={() => handleSelectEdition('6')}>
                <strong>#06</strong>
              </ButtonMobile>
            </ButtonWrapperMobile>
          </ButtonsMobile>

          <VideoWrapper>
            <PlayVideoButton>
              <PlayVideoIcon />

              <ThumbnailWrapper>
                <Thumbnail
                  alt={`Next Level Week ${selectedEdition}`}
                  src={`/images/thumbnails/nlw${selectedEdition}.png`}
                />
              </ThumbnailWrapper>
            </PlayVideoButton>
          </VideoWrapper>
        </Content>
      </Container>

      <Divider />
    </Section>
  );
}
