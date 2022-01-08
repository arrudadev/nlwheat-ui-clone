import { ReactNode } from 'react';

import ArrowIcon from '../../assets/icons/arrow.svg';
import {
  ArrowIconWrapper,
  Container,
  Description,
  IconWrapper,
  Title,
} from './styles';

type MethodCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  showArrowIcon?: boolean;
};

export function MethodCard({
  icon,
  title,
  description,
  showArrowIcon = false,
}: MethodCardProps) {
  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>

      <Title>{title}</Title>

      <Description>{description}</Description>

      {showArrowIcon && (
        <ArrowIconWrapper>
          <ArrowIcon />
        </ArrowIconWrapper>
      )}
    </Container>
  );
}
