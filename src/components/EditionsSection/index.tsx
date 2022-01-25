import { useState } from 'react';

import PlayVideoIcon from '../../assets/icons/play-video.svg';
import { Divider } from '../Divider';
import { EditionButton } from '../EditionButton';
import {
  ButtonMobile,
  Buttons,
  ButtonsMobile,
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
            <EditionButton
              edition="1"
              isActive={isActive('1')}
              onClick={() => handleSelectEdition('1')}
            />

            <EditionButton
              edition="2"
              isActive={isActive('2')}
              onClick={() => handleSelectEdition('2')}
            />

            <EditionButton
              edition="3"
              isActive={isActive('3')}
              onClick={() => handleSelectEdition('3')}
            />

            <EditionButton
              edition="4"
              isActive={isActive('4')}
              onClick={() => handleSelectEdition('4')}
            />

            <EditionButton
              edition="5"
              isActive={isActive('5')}
              onClick={() => handleSelectEdition('5')}
            />

            <EditionButton
              edition="6"
              isActive={isActive('6')}
              onClick={() => handleSelectEdition('6')}
            />
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
