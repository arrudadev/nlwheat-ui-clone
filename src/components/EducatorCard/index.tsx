import {
  Container,
  EducatorDescription,
  EducatorName,
  EducatorPhoto,
  EducatorPhotoWrapper,
  EducatorTechnology,
  Headline,
} from './styles';

type EducatorCardProps = {
  name: string;
  photo: string;
  technology?: string | undefined;
  description: string;
};

export function EducatorCard({
  name,
  photo,
  technology = '',
  description,
}: EducatorCardProps) {
  return (
    <Container>
      <EducatorPhotoWrapper>
        <EducatorPhoto src={`/images/educators/${photo}`} alt={name} />
      </EducatorPhotoWrapper>

      <Headline>
        <EducatorName>{name}</EducatorName>

        <EducatorTechnology>Educador {technology}</EducatorTechnology>
      </Headline>

      <EducatorDescription>{description}</EducatorDescription>
    </Container>
  );
}
