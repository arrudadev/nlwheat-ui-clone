import styled, { css } from 'styled-components';

import ArrowRightSVG from '../../assets/icons/arrow-right.svg';
import InviteLinkButtonCopySVG from '../../assets/icons/copy.svg';
import CustomTicketGithubSuccessfullySVG from '../../assets/icons/custom-ticket-github-successfully.svg';
import CustomizeTicketGithubSVG from '../../assets/icons/customize-ticket-github.svg';
import DiscordSVG from '../../assets/icons/discord.svg';
import StepDoWhileSVG from '../../assets/icons/step-do-while.svg';
import TicketBackgroundMobileSVG from '../../assets/icons/ticket-background-mobile.svg';
import TicketBackgroundSVG from '../../assets/icons/ticket-background.svg';
import TicketDoWhileMobileSVG from '../../assets/icons/ticket-do-while-mobile.svg';
import TicketDoWhileSVG from '../../assets/icons/ticket-do-while.svg';
import TicketGithubSVG from '../../assets/icons/ticket-github.svg';
import TicketPersonSVG from '../../assets/icons/ticket-person.svg';
import TicketReservedSVG from '../../assets/icons/ticket-reserved.svg';

type TicketProps = {
  isMobile?: boolean;
};

export const Main = styled.main`
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/conclusion/conclusion-bg.png');

  min-height: calc(100vh - 56px);
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;

  position: relative;

  @media (min-width: 320px) {
    padding: 40px 0 32px;

    overflow: hidden;
  }

  @media (min-width: 768px) {
    padding: 130px 0 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 320px) {
    align-items: flex-start;
    flex-direction: column;

    margin: 0 24px;

    width: 1120px;
  }

  @media (min-width: 992px) {
    align-items: center;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TicketReserved = styled.div`
  display: flex;
  align-items: center;

  color: var(--gray);

  @media (min-width: 320px) {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const TicketReservedIcon = styled(TicketReservedSVG)`
  margin-right: 12px;

  @media (min-width: 320px) {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;

    margin-right: 16px;
  }
`;

export const TicketReservedTitle = styled.strong`
  font-weight: 400;

  @media (min-width: 320px) {
    font-size: 15px;
    line-height: 18px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }

  span {
    font-weight: 700;

    color: var(--green);
  }
`;

export const Title = styled.h1`
  font-weight: 700;

  color: var(--gray);

  @media (min-width: 320px) {
    font-size: 30px;
    line-height: 36px;
  }

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 46px;
  }
`;

export const SubTitle = styled.h2`
  color: var(--gray);

  @media (min-width: 320px) {
    font-size: 15px;
    line-height: 25px;

    max-width: 316px;

    margin: 32px 0 24px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;

    max-width: 360px;

    margin: 24px 0 32px;
  }
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 352px;

  transition: all 0.3s ease;

  @media (min-width: 320px) {
    width: 100%;
  }
`;

const stepCss = css`
  display: flex;
  align-items: center;

  position: relative;

  font-weight: 700;

  color: var(--white);
  text-align: left;

  padding: 16px;

  border-radius: 5px;

  transition: all 0.1s ease-in;

  @media (min-width: 320px) {
    font-size: 13px;
    line-height: 22px;
  }

  @media (min-width: 375px) {
    font-size: 15px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const stepIconCss = css`
  @media (min-width: 320px) {
    width: 40px;
    height: 40px;

    margin: 0 8px;
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;

    margin: 0 16px 0 14px;
  }
`;

export const StepNumber = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

export const ArrowRightIcon = styled(ArrowRightSVG)`
  position: absolute;
  right: 24px;

  color: var(--gray);
`;

export const CustomizeYourTicketWithGithubButton = styled.button`
  ${stepCss}

  border: 0;

  background: linear-gradient(269.94deg, #2c204b -7.44%, #4f0732 99.94%);

  margin-bottom: 16px;
`;

export const CustomizeTicketGithubIcon = styled(CustomizeTicketGithubSVG)`
  ${stepIconCss}
`;

export const CustomTicketSuccessfullyWithGithubButton = styled.button`
  ${stepCss}

  border: 0;

  background: var(--green-low);

  margin-bottom: 16px;

  cursor: not-allowed;

  strong {
    color: var(--green);
  }
`;

export const CustomTicketGithubSuccessfullyIcon = styled(
  CustomTicketGithubSuccessfullySVG,
)`
  ${stepIconCss}
`;

export const JoinInCommunityLink = styled.a`
  ${stepCss}

  margin-bottom: 16px;

  background: linear-gradient(93.58deg, #272d66, #382862);
`;

export const DiscordIcon = styled(DiscordSVG)`
  ${stepIconCss}
`;

export const KnowMoreAboutDoWhileLink = styled.a`
  ${stepCss}

  margin-bottom: 16px;

  background: linear-gradient(93.58deg, #530831, #534311);
`;

export const StepDoWhileIcon = styled(StepDoWhileSVG)`
  ${stepIconCss}
`;

export const TicketArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Ticket = styled.div<TicketProps>`
  /* display: flex; */
  align-items: center;
  justify-content: center;

  position: relative;

  @media (min-width: 320px) {
    display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};

    width: 272px;
    height: 125px;

    margin-top: 32px;
  }

  @media (min-width: 375px) {
    width: 328px;
    height: 150px;
  }

  @media (min-width: 768px) {
    display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};

    width: unset;
    height: unset;
  }

  @media (min-width: 1200px) {
    margin-top: unset;
  }
`;

export const TicketBackgroundIcon = styled(TicketBackgroundSVG)``;

export const TicketBackgroundMobileIcon = styled(TicketBackgroundMobileSVG)``;

export const TicketDoWhileIcon = styled(TicketDoWhileSVG)`
  position: absolute;

  @media (min-width: 320px) {
    top: 24px;
    left: 24px;

    width: 85px;
    height: auto;
  }

  @media (min-width: 375px) {
    top: 32px;
    left: 32px;
  }

  @media (min-width: 768px) {
    top: 60px;
    left: 48px;

    width: unset;
    height: unset;
  }
`;

export const TicketDoWhileMobileIcon = styled(TicketDoWhileMobileSVG)`
  position: absolute;

  @media (min-width: 320px) {
    top: 24px;
    left: 24px;

    width: 85px;
    height: auto;
  }

  @media (min-width: 375px) {
    top: 32px;
    left: 32px;
  }
`;

export const TicketDate = styled.div`
  position: absolute;

  font-weight: 700;

  text-align: right;
  color: var(--yellow);

  @media (min-width: 320px) {
    top: 24px;
    right: 102px;

    font-size: 9px;
    line-height: 14px;
  }

  @media (min-width: 375px) {
    top: 32px;
    right: 126px;
  }

  @media (min-width: 768px) {
    top: 60px;
    right: 223px;

    font-size: 16px;
    line-height: 24px;
  }
`;

export const TicketProfile = styled.div`
  display: flex;

  position: absolute;

  @media (min-width: 320px) {
    left: 24px;
    bottom: 8px;
  }

  @media (min-width: 375px) {
    left: 30px;
    bottom: 22px;
  }

  @media (min-width: 768px) {
    left: 48px;
    bottom: 40px;

    align-items: center;
  }
`;

export const TicketPersonIcon = styled(TicketPersonSVG)`
  @media (min-width: 320px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    width: unset;
    height: unset;
  }
`;

export const TicketPersonInfo = styled.div`
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 320px) {
    max-width: 116px;

    margin-left: 12px;
  }

  @media (min-width: 768px) {
    max-width: 240px;

    margin-left: 20px;
  }
`;

export const TicketPersonName = styled.span`
  font-weight: 700;

  color: var(--white);

  @media (min-width: 320px) {
    font-size: 14px;
    line-height: 14px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const TicketPersonGithub = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 320px) {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    margin-top: 8px;
  }
`;

export const TicketGithubIcon = styled(TicketGithubSVG)`
  width: 18px;
  height: 18px;

  color: var(--support);

  @media (min-width: 320px) {
    width: 12px;
    height: 12px;
  }
`;

export const TicketGithubUsername = styled.span`
  color: var(--text);

  margin-left: 8px;

  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 320px) {
    font-size: 8px;
    line-height: 14px;

    max-width: 116px;

    margin-left: 4px;
  }

  @media (min-width: 375px) {
    font-size: 10px;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 24px;

    max-width: 240px;
  }
`;

export const InviteLinkButton = styled.button`
  align-items: center;

  font-size: 14px;
  line-height: 24px;

  width: 100%;

  max-width: 577px;

  margin-top: 40px;

  border: 0;

  background: linear-gradient(
    100.95deg,
    rgba(95, 15, 59, 0.5) -1.05%,
    rgba(54, 35, 100, 0.5) 102.49%
  );

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;

    padding: 16px;
  }
`;

export const InviteLinkButtonCopyIcon = styled(InviteLinkButtonCopySVG)``;

export const InviteLinkButtonContent = styled.div`
  display: flex;
  align-items: center;

  margin-left: 16px;

  strong {
    font-weight: 400;

    color: var(--white);

    @media (min-width: 320px) {
      max-width: 165px;

      margin: 0;
    }

    @media (min-width: 375px) {
      max-width: unset;
    }
  }

  span {
    color: var(--support);

    margin-left: 10px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 320px) {
      max-width: 165px;

      margin: 0;
    }

    @media (min-width: 375px) {
      max-width: 234px;
    }

    @media (min-width: 768px) {
      margin-left: 10px;
    }
  }
`;

export const ShareYourTicket = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 24px;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
  }

  span {
    font-size: 18px;
    line-height: 28px;

    color: var(--gray);

    margin-bottom: 20px;
  }
`;

export const OptionsToShareList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 320px) {
    grid-gap: 8px;
    gap: 8px;
  }

  @media (min-width: 768px) {
    grid-gap: 32px;
    gap: 32px;
  }
`;

export const OptionToShare = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShareLinkButton = styled.button`
  position: relative;

  padding: 0px;

  font: inherit;
  color: inherit;

  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const ShareLinkImg = styled.img`
  display: block;
  visibility: visible;

  inset: 0px;
  box-sizing: border-box;

  padding: 0px;

  border: none;

  margin: auto;

  min-width: 100%;
  max-width: 100%;

  min-height: 100%;
  max-height: 100%;

  object-fit: cover;
`;

export const StartedWarning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  line-height: 34px;

  color: var(--white);

  height: 56px;

  backdrop-filter: blur(20px);

  background: linear-gradient(
    269.94deg,
    rgba(255, 0, 142, 0.45) -7.44%,
    rgba(130, 87, 229, 0.45) 99.94%
  );

  @media (min-width: 320px) {
    font-size: 14px;
  }

  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

export const StartedWarningLink = styled.a`
  color: var(--white);

  margin-left: 8px;

  transition: all 0.3s ease;

  &:hover {
    color: var(--yellow);
  }
`;
