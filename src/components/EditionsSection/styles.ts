import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  position: relative;

  @media (min-width: 320px) {
    padding: 80px 0;
  }

  @media (min-width: 768px) {
    padding: 160px 0;
  }
`;

export const Container = styled.div`
  flex-direction: column;

  @media (min-width: 320px) {
    display: flex;
    justify-content: space-between;

    width: 1120px;

    margin: 0 24px;
  }

  @media (min-width: 1200px) {
    margin: unset;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Title = styled.h3`
  max-width: 423px;

  @media (min-width: 320px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;

    color: var(--white);

    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 54px;
  }
`;

export const Paragraph = styled.p`
  max-width: 445px;

  @media (min-width: 320px) {
    font-size: var(--font-text);
    font-weight: 400;
    line-height: 26px;

    color: var(--gray);
  }

  @media (min-width: 1200px) {
    line-height: 25px;
  }
`;

export const Content = styled.div`
  display: flex;

  @media (min-width: 320px) {
    flex-direction: column;

    margin-top: 40px;
  }

  @media (min-width: 992px) {
    flex-direction: row;

    margin-top: 68px;
  }
`;

export const EditionsButtons = styled.div`
  width: 100%;
  max-width: 300px;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const EditionsButtonsMobile = styled.div`
  display: none;

  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    width: 100%;

    margin-bottom: 18px;

    border: 1px solid var(--shape-hover);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  @media (min-width: 375px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100%;

  @media (min-width: 320px) {
    border-radius: unset;

    min-height: 182px;
  }

  @media (min-width: 576px) {
    min-height: 297px;
  }

  @media (min-width: 768px) {
    min-height: 405px;
  }

  @media (min-width: 992px) {
    min-height: 362px;
  }

  @media (min-width: 1200px) {
    height: 474px;
    min-height: 474px;
  }
`;

export const PlayVideoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: transparent;

  svg {
    position: absolute;

    z-index: 100;

    @media (min-width: 320px) {
      width: 46px;
      height: 46px;
    }

    @media (min-width: 768px) {
      width: unset;
      height: unset;
    }
  }
`;

export const ThumbnailWrapper = styled.div`
  display: inline-block;
  position: relative;

  max-width: 100%;

  overflow: hidden;
  box-sizing: border-box;
  margin: 0px;
`;

export const Thumbnail = styled.img`
  display: block;
  visibility: visible;

  inset: 0px;
  box-sizing: border-box;

  border: none;
  border-radius: 5px;

  padding: 0px;
  margin: auto;

  min-width: 100%;
  max-width: 100%;

  min-height: 100%;
  max-height: 100%;

  object-fit: cover;

  background: linear-gradient(270deg, #09090a, #121214);

  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 1.7s;

  @media (min-width: 320px) {
    border-radius: unset;

    min-height: 182px;
  }

  @media (min-width: 576px) {
    min-height: 297px;
  }

  @media (min-width: 768px) {
    min-height: 405px;
  }

  @media (min-width: 992px) {
    min-height: unset;

    border-radius: 5px;
  }
`;
