import ExpanseTrailIcon from '../../assets/icons/expanse-trail.svg';
import ImpulseTrailIcon from '../../assets/icons/impulse-trail.svg';
import OriginTrailIcon from '../../assets/icons/origin-trail.svg';
import { TrailsBanner } from '../../components/TrailsBanner';
import {
  Container,
  Title,
  TrailsBody,
  TrailsBodyHeadline,
  TrailsBodyParagraph,
  TrailButton,
  TrailCard,
  TrailDescription,
  TrailIconWrapper,
  TrailLevel,
  TrailsList,
  TrailTitle,
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

          <TrailsList>
            <TrailCard trail="origin">
              <div>
                <TrailIconWrapper>
                  <OriginTrailIcon />
                </TrailIconWrapper>

                <TrailTitle trail="origin">
                  Mission: <strong>Origin</strong>
                </TrailTitle>

                <TrailLevel trail="origin">Foundation</TrailLevel>

                <TrailDescription>
                  Se você está no início da jornada, com menos de um ano de
                  estudo, e quer construir os alicerces necessários para decolar
                  em programação, essa é a missão certa para você.
                </TrailDescription>
              </div>

              <TrailButton trail="origin">confirmar embarque</TrailButton>
            </TrailCard>

            <TrailCard trail="impulse">
              <div>
                <TrailIconWrapper>
                  <ImpulseTrailIcon />
                </TrailIconWrapper>

                <TrailTitle trail="impulse">
                  Mission: <strong>Impulse</strong>
                </TrailTitle>

                <TrailLevel trail="impulse">Ignition</TrailLevel>

                <TrailDescription>
                  Se você já dominou os fundamentos da programação e quer levar
                  suas habilidades para o próximo nível desenvolvendo uma
                  aplicação completa, essa é a sua missão.
                </TrailDescription>
              </div>

              <TrailButton trail="impulse">confirmar embarque</TrailButton>
            </TrailCard>

            <TrailCard trail="expanse">
              <div>
                <TrailIconWrapper>
                  <ExpanseTrailIcon />
                </TrailIconWrapper>

                <TrailTitle trail="expanse">
                  Mission: <strong>Expanse</strong>
                </TrailTitle>

                <TrailLevel trail="expanse">Advanced</TrailLevel>

                <TrailDescription>
                  Aulas avançadas e independentes para você descobrir como
                  tecnologias modernas são aplicadas no dia-a-dia de empresas,
                  para você expandir seu conhecimento.
                </TrailDescription>
              </div>

              <TrailButton trail="expanse">confirmar embarque</TrailButton>
            </TrailCard>
          </TrailsList>
        </Container>
      </TrailsBody>
    </>
  );
}
