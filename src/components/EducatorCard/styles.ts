import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const Headline = styled.div`
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
