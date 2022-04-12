import { TrailCard } from '../TrailCard';
import { TrailsListContainer } from './styles';

export function TrailsList() {
  return (
    <TrailsListContainer>
      <TrailCard
        trail="origin"
        title="Origin"
        level="Foundation"
        description="Se você está no início da jornada, com menos de um ano de estudo, e
            quer construir os alicerces necessários para decolar em programação,
            essa é a missão certa para você."
      />

      <TrailCard
        trail="impulse"
        title="Impulse"
        level="Ignition"
        description="Se você já dominou os fundamentos da programação e quer levar suas
            habilidades para o próximo nível desenvolvendo uma aplicação
            completa, essa é a sua missão"
      />

      <TrailCard
        trail="expanse"
        title="Expanse"
        level="Advanced"
        description="Aulas avançadas e independentes para você descobrir como tecnologias
            modernas são aplicadas no dia-a-dia de empresas, para você expandir
            seu conhecimento."
      />
    </TrailsListContainer>
  );
}
