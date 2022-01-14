import { Pagination, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import {
  Container,
  QuotesIcon,
  Section,
  StyledSwiper,
  TestimonialAuthor,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarImgWrapper,
  TestimonialCard,
  TestimonialContent,
  TestimonialName,
  TestimonialParagraph,
} from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <StyledSwiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay
          slidesPerView={3}
          spaceBetween={50}
          style={{
            // eslint-disable-next-line
            // @ts-ignore
            '--swiper-pagination-color': '#ffcd1e',
          }}
        >
          <SwiperSlide>
            <TestimonialCard>
              <QuotesIcon />

              <TestimonialContent>
                <TestimonialParagraph>
                  Fiz a trilha de ReactJs e ouso dizer que aprendi muito mais
                  nessa semana do que em outros cursos que já fiz.
                </TestimonialParagraph>

                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <TestimonialAvatarImgWrapper>
                      <TestimonialAvatarImg
                        src="/images/testimonials/pedro.png"
                        alt="Pedro"
                      />
                    </TestimonialAvatarImgWrapper>

                    <TestimonialName>
                      <span>Pedro Albuquerque</span>
                    </TestimonialName>
                  </TestimonialAvatar>
                </TestimonialAuthor>
              </TestimonialContent>
            </TestimonialCard>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard>
              <QuotesIcon />

              <TestimonialContent>
                <TestimonialParagraph>
                  O melhor é o avanço que você pode ter. Imagina, em uma semana,
                  você aprender e desenvolver um ferramenta do zero, e fora que
                  o conhecimento você leva para sempre, isso ninguém tira de
                  você.
                </TestimonialParagraph>

                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <TestimonialAvatarImgWrapper>
                      <TestimonialAvatarImg
                        src="/images/testimonials/adisio.png"
                        alt="Pedro"
                      />
                    </TestimonialAvatarImgWrapper>

                    <TestimonialName>
                      <span>Adísio Fialho</span>
                    </TestimonialName>
                  </TestimonialAvatar>
                </TestimonialAuthor>
              </TestimonialContent>
            </TestimonialCard>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard>
              <QuotesIcon />

              <TestimonialContent>
                <TestimonialParagraph>
                  Fiz a trilha React, foi de muita ajuda, pois acabei de entrar
                  em uma empresa que está começando a migrar para essa
                  linguagem, e já fez eu ter bons olhares pelos gestores da
                  empresa.
                </TestimonialParagraph>

                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <TestimonialAvatarImgWrapper>
                      <TestimonialAvatarImg
                        src="/images/testimonials/danilo.png"
                        alt="Pedro"
                      />
                    </TestimonialAvatarImgWrapper>

                    <TestimonialName>
                      <span>Danilo Melo</span>
                    </TestimonialName>
                  </TestimonialAvatar>
                </TestimonialAuthor>
              </TestimonialContent>
            </TestimonialCard>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard>
              <QuotesIcon />

              <TestimonialContent>
                <TestimonialParagraph>
                  ...Sensacional como sempre, e o ultimo é sempre melhor, nunca
                  decepciona! Terceiro NLW seguido que vou de Trilha ReactJS e
                  não posso dizer que não aprendi algo novo e diferente em cada
                  um dos eventos...
                </TestimonialParagraph>

                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <TestimonialAvatarImgWrapper>
                      <TestimonialAvatarImg
                        src="/images/testimonials/gildo.png"
                        alt="Pedro"
                      />
                    </TestimonialAvatarImgWrapper>

                    <TestimonialName>
                      <span>Gildo Jr.</span>
                    </TestimonialName>
                  </TestimonialAvatar>
                </TestimonialAuthor>
              </TestimonialContent>
            </TestimonialCard>
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard>
              <QuotesIcon />

              <TestimonialContent>
                <TestimonialParagraph>
                  ...Recebi um caminho para trilhar, dicas de como caminhar com
                  as próprias pernas... Obtive contato com a comunidade, tive
                  idéias para desenvolver um portfólio... faltam palavras para
                  descrever a experiência.
                </TestimonialParagraph>

                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <TestimonialAvatarImgWrapper>
                      <TestimonialAvatarImg
                        src="/images/testimonials/jonathan.png"
                        alt="Pedro"
                      />
                    </TestimonialAvatarImgWrapper>

                    <TestimonialName>
                      <span>Jonathan Medeiros</span>
                    </TestimonialName>
                  </TestimonialAvatar>
                </TestimonialAuthor>
              </TestimonialContent>
            </TestimonialCard>
          </SwiperSlide>
        </StyledSwiper>
      </Container>
    </Section>
  );
}
