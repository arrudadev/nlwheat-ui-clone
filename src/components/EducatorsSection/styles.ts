import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  position: relative;

  @media (min-width: 320px) {
    padding: 160px 0 80px;

    background: var(--background);
  }

  @media (min-width: 768px) {
    padding: 160px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 320px) {
    margin: unset;

    width: 1120px;
  }

  @media (min-width: 768px) {
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

    margin: 0 24px;

    padding-bottom: 40px;
  }

  @media (min-width: 768px) {
    margin-bottom: 144px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Title = styled.h3`
  max-width: 416px;

  @media (min-width: 320px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;

    color: var(--white);
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 54px;
  }
`;

export const Paragraph = styled.p`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 50px;
    height: 1px;

    background: var(--carbon);

    @media (min-width: 320px) {
      display: none;
    }

    @media (min-width: 992px) {
      display: flex;
    }
  }

  @media (min-width: 320px) {
    font-size: var(--font-text);
    font-weight: 400;
    line-height: 26px;

    color: var(--gray);

    padding-top: 24px;
  }

  @media (min-width: 992px) {
    max-width: 400px;

    padding-top: 40px;
  }

  @media (min-width: 1200px) {
    max-width: 544px;

    line-height: 25px;
  }
`;

export const EducatorsList = styled.ul`
  display: grid;

  @media (min-width: 320px) {
    grid-gap: 16px;
    gap: 16px;
    grid-template-columns: unset;
  }

  @media (min-width: 768px) {
    grid-gap: 104px 24px;
    gap: 104px 24px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-gap: 104px 32px;
    gap: 104px 32px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EducatorCard = styled.li`
  display: flex;
  flex-direction: column;

  position: relative;

  border: 1px solid var(--shape-hover);

  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: 44% 56%;
    grid-template-areas:
      'photo headline'
      'description description';

    padding: 24px 30px;

    border-radius: unset;
    border-left: unset;
    border-right: unset;
  }

  @media (min-width: 576px) {
    grid-template-columns: 30% 70%;
  }

  @media (min-width: 768px) {
    display: flex;

    grid-template-columns: unset;
    grid-template-areas: unset;

    border-radius: 5px;
    border: 1px solid var(--shape-hover);

    padding: 156px 32px 32px;
  }

  @media (min-width: 992px) {
    border-radius: 5px;
    border: 1px solid var(--shape-hover);

    padding: 156px 14px 32px 32px;
  }
`;

export const EducatorPhotoWrapper = styled.div`
  position: absolute;
  top: 64px;
  left: 32px;

  @media (min-width: 320px) {
    grid-area: photo;

    position: unset;
    top: unset;

    width: 104px;
    height: 104px;
  }

  @media (min-width: 375px) {
    width: 124px;
    height: 124px;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: -64px;

    width: 180px;
    height: 180px;

    margin-bottom: 24px;
  }

  @media (min-width: 992px) {
    position: absolute;
    top: -64px;
  }
`;

export const EducatorPhoto = styled.img`
  display: block;
  /* position: absolute; */
  visibility: visible;

  inset: 0px;
  box-sizing: border-box;

  border: none;
  border-radius: 5px;

  padding: 0px;
  margin: auto;

  /* width: 0px;
  height: 0px; */

  min-width: 100%;
  max-width: 100%;

  min-height: 100%;
  max-height: 100%;

  object-fit: cover;
`;

export const EducatorCardHeader = styled.div`
  grid-area: headline;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const EducatorName = styled.h4`
  font-weight: 700;
  color: var(--gray);

  @media (min-width: 320px) {
    font-size: 25px;
    line-height: 30px;

    margin-bottom: 4px;
  }

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 30px;

    margin-bottom: 8px;
  }
`;

export const EducatorTechnology = styled.span`
  font-weight: 400;

  background-repeat: repeat;
  background-size: 100%;
  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-image: linear-gradient(
    269.94deg,
    #ffcd1e -7.44%,
    #ff008e 39.17%,
    #8257e5 99.94%
  );
`;

export const EducatorDescription = styled.p`
  margin-top: 24px;

  @media (min-width: 320px) {
    grid-area: description;

    font-size: var(--font-text);
    font-weight: 400;
    line-height: 26px;

    color: var(--gray);
  }

  @media (min-width: 1200px) {
    line-height: 25px;
  }
`;
