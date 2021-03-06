import { Pagination, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { TestimonialCard } from '../TestimonialCard';
import { Container, Section, StyledSwiper } from './styles';

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
          // autoplay
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 1,
              direction: 'vertical',
            },
            576: {
              slidesPerView: 2,
              direction: 'vertical',
            },
            1200: {
              slidesPerView: 3,
              direction: 'horizontal',
            },
          }}
          style={{
            // eslint-disable-next-line
            // @ts-ignore
            '--swiper-pagination-color': '#ffcd1e',
          }}
        >
          <SwiperSlide>
            <TestimonialCard
              name="Pedro Albuquerque"
              image="pedro.png"
              testimonial="Fiz a trilha de ReactJs e ouso dizer que aprendi muito mais
                  nessa semana do que em outros cursos que já fiz."
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Adísio Fialho"
              image="adisio.png"
              testimonial="O melhor é o avanço que você pode ter. Imagina, em uma semana,
              você aprender e desenvolver um ferramenta do zero, e fora que
              o conhecimento você leva para sempre, isso ninguém tira de
              você."
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Danilo Melo"
              image="danilo.png"
              testimonial="Fiz a trilha React, foi de muita ajuda, pois acabei de entrar
              em uma empresa que está começando a migrar para essa
              linguagem, e já fez eu ter bons olhares pelos gestores da
              empresa."
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Gildo Jr."
              image="gildo.png"
              testimonial="...Sensacional como sempre, e o ultimo é sempre melhor, nunca
              decepciona! Terceiro NLW seguido que vou de Trilha ReactJS e
              não posso dizer que não aprendi algo novo e diferente em cada
              um dos eventos..."
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Jonathan Medeiros"
              image="jonathan.png"
              testimonial="...Recebi um caminho para trilhar, dicas de como caminhar com
              as próprias pernas... Obtive contato com a comunidade, tive
              idéias para desenvolver um portfólio... faltam palavras para
              descrever a experiência."
            />
          </SwiperSlide>
        </StyledSwiper>
      </Container>
    </Section>
  );
}
