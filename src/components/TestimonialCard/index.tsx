import {
  QuotesIcon,
  TestimonialAuthor,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarImgWrapper,
  TestimonialCardContainer,
  TestimonialContent,
  TestimonialName,
  TestimonialParagraph,
} from './styles';

type TestimonialCardProps = {
  name: string;
  image: string;
  testimonial: string;
};

export function TestimonialCard({
  name,
  image,
  testimonial,
}: TestimonialCardProps) {
  return (
    <TestimonialCardContainer>
      <QuotesIcon />

      <TestimonialContent>
        <TestimonialParagraph>{testimonial}</TestimonialParagraph>

        <TestimonialAuthor>
          <TestimonialAvatar>
            <TestimonialAvatarImgWrapper>
              <TestimonialAvatarImg
                src={`/images/testimonials/${image}`}
                alt={name}
              />
            </TestimonialAvatarImgWrapper>

            <TestimonialName>
              <span>{name}</span>
            </TestimonialName>
          </TestimonialAvatar>
        </TestimonialAuthor>
      </TestimonialContent>
    </TestimonialCardContainer>
  );
}
