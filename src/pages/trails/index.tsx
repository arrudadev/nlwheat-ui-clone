import { TrailsBanner } from '../../components/TrailsBanner';
import { TrailsList } from '../../components/TrailsList';
import {
  Container,
  Title,
  TrailsBody,
  TrailsBodyHeadline,
  TrailsBodyParagraph,
} from '../../styles/pages/trails';

export default function Trails() {
  return (
    <>
      <TrailsBanner />

      <TrailsBody>
        <Container>
          <TrailsBodyHeadline>
            <Title>
              Trilhas <br /> disponíveis
            </Title>

            <TrailsBodyParagraph>
              <strong>Tenha foco e não se preocupe:</strong> Você poderá trocar
              de trilha em qualquer momento. Escolha apenas uma trilha para
              absorver tudo a fundo. Falta de foco e conhecimento superficial é
              o que vai te impedir de alcançar seus objetivos.
            </TrailsBodyParagraph>
          </TrailsBodyHeadline>

          <TrailsList />
        </Container>
      </TrailsBody>
    </>
  );
}
