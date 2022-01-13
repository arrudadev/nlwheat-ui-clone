import AwardsIcon from '../../assets/icons/awards.svg';
import BackpackIcon from '../../assets/icons/backpack.svg';
import CellphoneIcon from '../../assets/icons/cellphone.svg';
import CodeIcon from '../../assets/icons/code.svg';
import NetworkingIcon from '../../assets/icons/networking.svg';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { MissionContentCard } from '../MissionContentCard';
import {
  ButtonContainer,
  CardsArea,
  Container,
  Section,
  StickyArea,
  StickyAreaTitle,
  StickyContainer,
} from './styles';

export function MissionContentSection() {
  return (
    <Section>
      <Container>
        <StickyArea>
          <StickyContainer>
            <StickyAreaTitle>
              Ao embarcar nessa missão, você vai ter acesso a:
            </StickyAreaTitle>

            <ButtonContainer>
              <Button>Embarcar Agora</Button>
            </ButtonContainer>
          </StickyContainer>
        </StickyArea>

        <CardsArea>
          <MissionContentCard
            icon={<CellphoneIcon />}
            title="Uma aplicação completa"
            description="Durante o evento, vamos desenvolver uma aplicação completa, para você entender como grandes empresas estão utilizando as ferramentas no dia-a-dia, além de expandir o seu portfólio e conhecer novas tecnologias na prática."
          />

          <MissionContentCard
            icon={<NetworkingIcon />}
            title="Networking 100% digital"
            description="Você terá acesso a uma comunidade extremamente engajada que conta com cabeças super inteligentes, onde poderá tirar suas dúvidas, se conectar e interagir com outros devs e acessar ótimas oportunidades."
          />

          <MissionContentCard
            icon={<CodeIcon />}
            title="Conteúdo Prático para todos os níveis"
            description="O conteúdo do NLW é prático, com trilhas para todos os níveis, onde você vai aprimorar suas habilidades e ter todas as condições necessárias para acessar ótimas oportunidades no mercado, encarar os desafios do mundo real e construir aplicações de ponta."
          />

          <MissionContentCard
            icon={<AwardsIcon />}
            title="Desafios e prêmios"
            description="Você será desafiado durante o NLW, para assimilar e internalizar profundamente cada conceito. E o melhor: poderá ganhar prêmios exclusivos da Rocketseat."
          />

          <MissionContentCard
            icon={<BackpackIcon />}
            title="Programa de bolsas"
            description="Ao embarcar no NLW e participar do evento, você poderá concorrer a uma bolsa de estudos integral para estudar na Rocketseat."
          />
        </CardsArea>
      </Container>

      <Divider />
    </Section>
  );
}
