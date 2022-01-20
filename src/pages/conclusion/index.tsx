import { useState } from 'react';

import {
  ArrowRightIcon,
  Container,
  Content,
  CustomizeTicketGithubIcon,
  CustomizeYourTicketWithGithubButton,
  CustomTicketGithubSuccessfullyIcon,
  CustomTicketSuccessfullyWithGithubButton,
  DiscordIcon,
  InviteLinkButton,
  InviteLinkButtonContent,
  InviteLinkButtonCopyIcon,
  InviteLinkButtonCopyMobileIcon,
  JoinInCommunityLink,
  KnowMoreAboutDoWhileLink,
  Main,
  OptionsToShareList,
  OptionToShare,
  Section,
  ShareLinkButton,
  ShareLinkImg,
  ShareYourTicket,
  StartedWarning,
  StartedWarningLink,
  StepDoWhileIcon,
  StepNumber,
  Steps,
  SubTitle,
  Ticket,
  TicketArea,
  TicketBackgroundConnectedIcon,
  TicketBackgroundIcon,
  TicketBackgroundMobileConnectedIcon,
  TicketBackgroundMobileIcon,
  TicketDate,
  TicketDoWhileIcon,
  TicketDoWhileMobileIcon,
  TicketGithubIcon,
  TicketGithubUsername,
  TicketPersonGithub,
  TicketPersonIcon,
  TicketPersonImage,
  TicketPersonInfo,
  TicketPersonName,
  TicketProfile,
  TicketReserved,
  TicketReservedIcon,
  TicketReservedTitle,
  Title,
} from '../../styles/pages/conclusion';

export default function Conclusion() {
  const [isAlreadyCustomTicketWithGithub, setIsAlreadyCustomTicketWithGithub] =
    useState(false);

  const [name, setName] = useState('Seu nome');
  const [username, setUsername] = useState('username');
  const [imageUrl, setImageUrl] = useState('');

  function handleCustomizeYourTicketWithGithub() {
    setName('Alexandre Monteiro');
    setUsername('arrudadev');
    setImageUrl('https://github.com/arrudadev.png');

    setIsAlreadyCustomTicketWithGithub(true);
  }

  return (
    <>
      <Main>
        <Section>
          <Container>
            <Content>
              <TicketReserved>
                <TicketReservedIcon />

                <TicketReservedTitle>
                  Bem-vindo(a) a <span>bordo!</span>
                </TicketReservedTitle>
              </TicketReserved>

              <Title>Conclua sua inscrição</Title>

              <Ticket isMobile>
                {!isAlreadyCustomTicketWithGithub && (
                  <TicketBackgroundMobileIcon />
                )}

                {isAlreadyCustomTicketWithGithub && (
                  <TicketBackgroundMobileConnectedIcon />
                )}

                <TicketDoWhileMobileIcon />

                <TicketDate>
                  18 a 24 <br /> de outubro
                </TicketDate>

                <TicketProfile>
                  {!isAlreadyCustomTicketWithGithub && <TicketPersonIcon />}

                  {isAlreadyCustomTicketWithGithub && (
                    <TicketPersonImage src={imageUrl} alt={name} />
                  )}

                  <TicketPersonInfo>
                    <TicketPersonName>{name}</TicketPersonName>

                    <TicketPersonGithub>
                      <TicketGithubIcon
                        isAlreadyCustomTicketWithGithub={
                          isAlreadyCustomTicketWithGithub
                        }
                      />

                      <TicketGithubUsername
                        isAlreadyCustomTicketWithGithub={
                          isAlreadyCustomTicketWithGithub
                        }
                      >
                        {username}
                      </TicketGithubUsername>
                    </TicketPersonGithub>
                  </TicketPersonInfo>
                </TicketProfile>
              </Ticket>

              {isAlreadyCustomTicketWithGithub && (
                <>
                  <InviteLinkButton isMobile>
                    <InviteLinkButtonCopyMobileIcon />

                    <InviteLinkButtonContent>
                      <strong>Convide seus amigos com a sua URL:</strong>

                      <span>
                        https://nextlevelweek.com/convite/{username}/7
                      </span>
                    </InviteLinkButtonContent>
                  </InviteLinkButton>

                  <ShareYourTicket isMobile>
                    <span>Compartilhe seu Ticket:</span>

                    <OptionsToShareList>
                      <OptionToShare>
                        <ShareLinkButton>
                          <ShareLinkImg
                            src="/icons/whatsapp.png"
                            alt="Whatsapp"
                          />
                        </ShareLinkButton>
                      </OptionToShare>

                      <OptionToShare>
                        <ShareLinkButton>
                          <ShareLinkImg
                            src="/icons/linkedin.png"
                            alt="Linkedin"
                          />
                        </ShareLinkButton>
                      </OptionToShare>

                      <OptionToShare>
                        <ShareLinkButton>
                          <ShareLinkImg
                            src="/icons/facebook.png"
                            alt="Facebook"
                          />
                        </ShareLinkButton>
                      </OptionToShare>

                      <OptionToShare>
                        <ShareLinkButton>
                          <ShareLinkImg
                            src="/icons/twitter.png"
                            alt="Twitter"
                          />
                        </ShareLinkButton>
                      </OptionToShare>
                    </OptionsToShareList>
                  </ShareYourTicket>
                </>
              )}

              <SubTitle>
                <strong>Importante:</strong> Siga os passos abaixo para estar
                100% preparado(a) para o evento.
              </SubTitle>

              <Steps>
                {!isAlreadyCustomTicketWithGithub && (
                  <CustomizeYourTicketWithGithubButton
                    onClick={handleCustomizeYourTicketWithGithub}
                  >
                    <StepNumber>01</StepNumber>

                    <CustomizeTicketGithubIcon />

                    <span>
                      Personalize o ticket <br /> com seu GitHub
                    </span>

                    <ArrowRightIcon />
                  </CustomizeYourTicketWithGithubButton>
                )}

                {isAlreadyCustomTicketWithGithub && (
                  <CustomTicketSuccessfullyWithGithubButton>
                    <StepNumber>01</StepNumber>

                    <CustomTicketGithubSuccessfullyIcon />

                    <span>
                      Ticket personalizado <br /> <strong>com sucesso</strong>
                    </span>

                    <ArrowRightIcon />
                  </CustomTicketSuccessfullyWithGithubButton>
                )}

                <JoinInCommunityLink>
                  <StepNumber>02</StepNumber>

                  <DiscordIcon />

                  <span>
                    Entrar na <br /> comunidade exclusiva
                  </span>

                  <ArrowRightIcon />
                </JoinInCommunityLink>

                <KnowMoreAboutDoWhileLink>
                  <StepNumber>03</StepNumber>

                  <StepDoWhileIcon />

                  <span>
                    Saiba mais sobre o <br /> evento DoWhile2021
                  </span>

                  <ArrowRightIcon />
                </KnowMoreAboutDoWhileLink>
              </Steps>
            </Content>

            <TicketArea>
              <Ticket>
                {!isAlreadyCustomTicketWithGithub && <TicketBackgroundIcon />}

                {isAlreadyCustomTicketWithGithub && (
                  <TicketBackgroundConnectedIcon />
                )}

                <TicketDoWhileIcon />

                <TicketDate>
                  18 a 24 <br /> de outubro
                </TicketDate>

                <TicketProfile>
                  {!isAlreadyCustomTicketWithGithub && <TicketPersonIcon />}

                  {isAlreadyCustomTicketWithGithub && (
                    <TicketPersonImage src={imageUrl} alt={name} />
                  )}

                  <TicketPersonInfo>
                    <TicketPersonName>{name}</TicketPersonName>

                    <TicketPersonGithub>
                      <TicketGithubIcon
                        isAlreadyCustomTicketWithGithub={
                          isAlreadyCustomTicketWithGithub
                        }
                      />

                      <TicketGithubUsername
                        isAlreadyCustomTicketWithGithub={
                          isAlreadyCustomTicketWithGithub
                        }
                      >
                        {username}
                      </TicketGithubUsername>
                    </TicketPersonGithub>
                  </TicketPersonInfo>
                </TicketProfile>
              </Ticket>

              {isAlreadyCustomTicketWithGithub && (
                <>
                  <InviteLinkButton>
                    <InviteLinkButtonCopyIcon />

                    <InviteLinkButtonContent>
                      <strong>Convide seus amigos com a sua URL:</strong>

                      <span>
                        https://nextlevelweek.com/convite/{username}/7
                      </span>
                    </InviteLinkButtonContent>
                  </InviteLinkButton>

                  <ShareYourTicket>
                    <span>Compartilhe seu Ticket:</span>

                    <OptionsToShareList>
                      <OptionToShare>
                        <ShareLinkButton>
                          <ShareLinkImg
                            src="/icons/whatsapp.png"
                            alt="Whatsapp"
                          />
                        </ShareLinkButton>
                      </OptionToShare>

                      <OptionToShare>
                        <ShareLinkButton>
                          <ShareLinkImg
                            src="/icons/linkedin.png"
                            alt="Linkedin"
                          />
                        </ShareLinkButton>
                      </OptionToShare>

                      <OptionToShare>
                        <ShareLinkButton>
                          <ShareLinkImg
                            src="/icons/facebook.png"
                            alt="Facebook"
                          />
                        </ShareLinkButton>
                      </OptionToShare>

                      <OptionToShare>
                        <ShareLinkButton>
                          <ShareLinkImg
                            src="/icons/twitter.png"
                            alt="Twitter"
                          />
                        </ShareLinkButton>
                      </OptionToShare>
                    </OptionsToShareList>
                  </ShareYourTicket>
                </>
              )}
            </TicketArea>
          </Container>
        </Section>
      </Main>

      <StartedWarning>
        <span>Ei, dev. O NLW já começou.</span>

        <StartedWarningLink>Acesse aqui</StartedWarningLink>
      </StartedWarning>
    </>
  );
}
