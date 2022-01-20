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
  TicketBackgroundIcon,
  TicketDate,
  TicketDoWhileIcon,
  TicketGithubIcon,
  TicketGithubUsername,
  TicketPersonGithub,
  TicketPersonIcon,
  TicketPersonInfo,
  TicketPersonName,
  TicketProfile,
  TicketReserved,
  TicketReservedIcon,
  TicketReservedTitle,
  Title,
} from '../../styles/pages/conclusion';

export default function Conclusion() {
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

              <SubTitle>
                <strong>Importante:</strong> Siga os passos abaixo para estar
                100% preparado(a) para o evento.
              </SubTitle>

              <Steps>
                <CustomizeYourTicketWithGithubButton>
                  <StepNumber>01</StepNumber>

                  <CustomizeTicketGithubIcon />

                  <span>
                    Personalize o ticket <br /> com seu GitHub
                  </span>

                  <ArrowRightIcon />
                </CustomizeYourTicketWithGithubButton>

                {/* <CustomTicketSuccessfullyWithGithubButton>
                <StepNumber>01</StepNumber>

                <CustomTicketGithubSuccessfullyIcon />

                <span>
                  Ticket personalizado <br /> <strong>com sucesso</strong>
                </span>

                <ArrowRightIcon />
              </CustomTicketSuccessfullyWithGithubButton> */}

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
                <TicketBackgroundIcon />

                <TicketDoWhileIcon />

                <TicketDate>
                  18 a 24 <br /> de outubro
                </TicketDate>

                <TicketProfile>
                  <TicketPersonIcon />

                  <TicketPersonInfo>
                    <TicketPersonName>Seu nome</TicketPersonName>

                    <TicketPersonGithub>
                      <TicketGithubIcon />

                      <TicketGithubUsername>Username</TicketGithubUsername>
                    </TicketPersonGithub>
                  </TicketPersonInfo>
                </TicketProfile>
              </Ticket>

              <InviteLinkButton>
                <InviteLinkButtonCopyIcon />

                <InviteLinkButtonContent>
                  <strong>Convide seus amigos com a sua URL:</strong>

                  <span>https://nextlevelweek.com/convite/username/7</span>
                </InviteLinkButtonContent>
              </InviteLinkButton>

              <ShareYourTicket>
                <span>Compartilhe seu Ticket:</span>

                <OptionsToShareList>
                  <OptionToShare>
                    <ShareLinkButton>
                      <ShareLinkImg src="/icons/whatsapp.png" alt="Whatsapp" />
                    </ShareLinkButton>
                  </OptionToShare>

                  <OptionToShare>
                    <ShareLinkButton>
                      <ShareLinkImg src="/icons/linkedin.png" alt="Linkedin" />
                    </ShareLinkButton>
                  </OptionToShare>

                  <OptionToShare>
                    <ShareLinkButton>
                      <ShareLinkImg src="/icons/facebook.png" alt="Facebook" />
                    </ShareLinkButton>
                  </OptionToShare>

                  <OptionToShare>
                    <ShareLinkButton>
                      <ShareLinkImg src="/icons/twitter.png" alt="Twitter" />
                    </ShareLinkButton>
                  </OptionToShare>
                </OptionsToShareList>
              </ShareYourTicket>
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
