import ExpanseTrailIcon from '../../assets/icons/expanse-trail.svg';
import ImpulseTrailIcon from '../../assets/icons/impulse-trail.svg';
import OriginTrailIcon from '../../assets/icons/origin-trail.svg';
import {
  TrailButton,
  TrailCardContainer,
  TrailDescription,
  TrailIconWrapper,
  TrailLevel,
  TrailTitle,
} from './styles';

type TrailCardProps = {
  trail: 'origin' | 'impulse' | 'expanse';
  title: string;
  level: string;
  description: string;
};

export function TrailCard({
  trail,
  title,
  level,
  description,
}: TrailCardProps) {
  return (
    <TrailCardContainer trail={trail}>
      <div>
        <TrailIconWrapper>
          {trail === 'origin' && <OriginTrailIcon />}

          {trail === 'impulse' && <ImpulseTrailIcon />}

          {trail === 'expanse' && <ExpanseTrailIcon />}
        </TrailIconWrapper>

        <TrailTitle trail={trail}>
          Mission: <strong>{title}</strong>
        </TrailTitle>

        <TrailLevel trail={trail}>{level}</TrailLevel>

        <TrailDescription>{description}</TrailDescription>
      </div>

      <TrailButton trail={trail}>confirmar embarque</TrailButton>
    </TrailCardContainer>
  );
}
